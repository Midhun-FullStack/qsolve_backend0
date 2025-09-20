import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// Custom hook for product-related data fetching and mutations
export const useProducts = () => {
  const queryClient = useQueryClient()

  // Fetch all products with caching
  const {
    data: products = [],
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('/api/products')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      return response.json()
    },
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
    retry: 3, // Retry failed requests 3 times
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  })

  // Create new product
  const createProduct = useMutation({
    mutationFn: async (newProduct) => {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
      if (!response.ok) {
        throw new Error('Failed to create product')
      }
      return response.json()
    },
    onSuccess: (newProduct) => {
      // Update the cache with the new product
      queryClient.setQueryData(['products'], (oldProducts) => [
        ...oldProducts,
        newProduct
      ])
    },
    onError: (error) => {
      console.error('Failed to create product:', error)
    },
  })

  // Update existing product
  const updateProduct = useMutation({
    mutationFn: async ({ id, updates }) => {
      const response = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      })
      if (!response.ok) {
        throw new Error('Failed to update product')
      }
      return response.json()
    },
    onSuccess: (updatedProduct) => {
      // Update the specific product in cache
      queryClient.setQueryData(['products'], (oldProducts) =>
        oldProducts.map(product =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      )
    },
  })

  // Delete product
  const deleteProduct = useMutation({
    mutationFn: async (productId) => {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete product')
      }
    },
    onSuccess: (_, deletedId) => {
      // Remove the product from cache
      queryClient.setQueryData(['products'], (oldProducts) =>
        oldProducts.filter(product => product.id !== deletedId)
      )
    },
  })

  // Prefetch products (useful for hover effects)
  const prefetchProducts = () => {
    queryClient.prefetchQuery({
      queryKey: ['products'],
      queryFn: async () => {
        const response = await fetch('/api/products')
        return response.json()
      },
      staleTime: 5 * 60 * 1000,
    })
  }

  return {
    // Data
    products,
    isLoading,
    error,

    // Actions
    createProduct: createProduct.mutate,
    updateProduct: updateProduct.mutate,
    deleteProduct: deleteProduct.mutate,
    refetch,

    // Loading states
    isCreating: createProduct.isLoading,
    isUpdating: updateProduct.isLoading,
    isDeleting: deleteProduct.isLoading,

    // Utilities
    prefetchProducts,
  }
}

// Hook for fetching a single product
export const useProduct = (productId) => {
  return useQuery({
    queryKey: ['products', productId],
    queryFn: async () => {
      const response = await fetch(`/api/products/${productId}`)
      if (!response.ok) {
        throw new Error('Failed to fetch product')
      }
      return response.json()
    },
    enabled: !!productId, // Only run query if productId is provided
    staleTime: 5 * 60 * 1000,
  })
}

// Hook for product search with debouncing
export const useProductSearch = (searchTerm) => {
  return useQuery({
    queryKey: ['products', 'search', searchTerm],
    queryFn: async () => {
      const response = await fetch(`/api/products/search?q=${encodeURIComponent(searchTerm)}`)
      if (!response.ok) {
        throw new Error('Failed to search products')
      }
      return response.json()
    },
    enabled: searchTerm.length > 2, // Only search if term is longer than 2 characters
    staleTime: 2 * 60 * 1000, // Search results are less stable
  })
}
