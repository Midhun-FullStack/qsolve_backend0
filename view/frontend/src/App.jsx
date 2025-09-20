import React, { Suspense } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load pages for code splitting
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Product = React.lazy(() => import('./pages/Product'))
const Landing = React.lazy(() => import('./pages/Landing'))
const Login = React.lazy(() => import('./pages/Login'))

// Navigation component with prefetch on hover
const Navigation = () => {
  const location = useLocation()

  const handleMouseEnter = (path) => {
    // Prefetch route chunks on hover
    switch (path) {
      case '/':
        import('./pages/Home')
        break
      case '/landing':
        import('./pages/Landing')
        break
      case '/login':
        import('./pages/Login')
        break
      case '/about':
        import('./pages/About')
        break
      case '/product':
        import('./pages/Product')
        break
      default:
        break
    }
  }

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            QSolve
          </Link>
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'bg-primary text-white'
                    : 'text-white hover:bg-primary hover:text-white'
                }`}
                onMouseEnter={() => handleMouseEnter('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/landing"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/landing'
                    ? 'bg-primary text-white'
                    : 'text-white hover:bg-primary hover:text-white'
                }`}
                onMouseEnter={() => handleMouseEnter('/landing')}
              >
                Landing
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/login'
                    ? 'bg-primary text-white'
                    : 'text-white hover:bg-primary hover:text-white'
                }`}
                onMouseEnter={() => handleMouseEnter('/login')}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/about'
                    ? 'bg-primary text-white'
                    : 'text-white hover:bg-primary hover:text-white'
                }`}
                onMouseEnter={() => handleMouseEnter('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/product'
                    ? 'bg-primary text-white'
                    : 'text-white hover:bg-primary hover:text-white'
                }`}
                onMouseEnter={() => handleMouseEnter('/product')}
              >
                Product
              </Link>
            </li>
          </ul>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-primary transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/landing" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
