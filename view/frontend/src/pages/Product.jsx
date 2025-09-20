import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// Custom hook for product operations
const useProducts = () => {
  const queryClient = useQueryClient()

  // Fetch products
  const {
    data: products = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('/api/products')
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      return response.json()
    },
    staleTime: 2 * 60 * 1000, // 2 minutes
  })

  // Create product mutation
  const createProductMutation = useMutation({
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
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
    },
  })

  // Delete product mutation
  const deleteProductMutation = useMutation({
    mutationFn: async (productId) => {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        throw new Error('Failed to delete product')
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['products'])
    },
  })

  return {
    products,
    isLoading,
    error,
    createProduct: createProductMutation.mutate,
    deleteProduct: deleteProductMutation.mutate,
    isCreating: createProductMutation.isLoading,
    isDeleting: deleteProductMutation.isLoading,
  }
}

const Product = () => {
  const {
    products,
    isLoading,
    error,
    createProduct,
    deleteProduct,
    isCreating,
    isDeleting
  } = useProducts()

  const [newProduct, setNewProduct] = useState({ name: '', price: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newProduct.name && newProduct.price) {
      createProduct({
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        createdAt: new Date().toISOString()
      })
      setNewProduct({ name: '', price: '' })
    }
  }

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId)
    }
  }

  if (isLoading) {
    return <div className="loading-container"><div className="spinner"></div></div>
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error loading products</h2>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div className="page-container">
      <h1>Product Management</h1>
      <p className="lead">
        Example of CRUD operations with React Query caching and optimistic updates.
      </p>

      {/* Add new product form */}
      <div className="form-section">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              required
              disabled={isCreating}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Price:</label>
            <input
              type="number"
              id="productPrice"
              step="0.01"
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              required
              disabled={isCreating}
            />
          </div>
          <button type="submit" disabled={isCreating}>
            {isCreating ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      </div>

      {/* Products list */}
      <div className="products-section">
        <h2>Products ({products.length})</h2>
        {products.length === 0 ? (
          <p className="no-products">No products found. Add your first product above!</p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price?.toFixed(2)}</p>
                <p className="product-date">
                  Created: {new Date(product.createdAt).toLocaleDateString()}
                </p>
                <button
                  onClick={() => handleDelete(product.id)}
                  disabled={isDeleting}
                  className="delete-button"
                >
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* React Query DevTools info */}
      <div className="info-section">
        <h3>💡 React Query Features Demonstrated:</h3>
        <ul>
          <li><strong>Smart Caching:</strong> Products are cached for 2 minutes</li>
          <li><strong>Background Updates:</strong> Data refetches automatically when stale</li>
          <li><strong>Optimistic Updates:</strong> UI updates immediately on mutations</li>
          <li><strong>Error Handling:</strong> Automatic retry on failed requests</li>
          <li><strong>Loading States:</strong> Individual loading states for each operation</li>
        </ul>
      </div>
    </div>
  )
}

export default Product
