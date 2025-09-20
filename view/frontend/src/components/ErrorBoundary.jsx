import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      // Custom error UI
      return (
        <div className="p-8 text-center bg-red-50 border border-red-200 rounded-lg m-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">🚨 Something went wrong</h1>
          <p className="text-red-700 mb-4">
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-red-600 hover:text-red-800">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 p-4 bg-gray-100 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                {this.state.error.toString()}
                {this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button
              onClick={this.handleReset}
              className="bg-red-600 text-white border-none px-6 py-3 rounded cursor-pointer hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-600 text-white border-none px-6 py-3 rounded cursor-pointer hover:bg-gray-700 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
