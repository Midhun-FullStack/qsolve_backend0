import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-md w-full bg-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-accent tracking-wider">QSOLVE</h1>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Email ID
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 bg-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-base transition-colors focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 bg-white"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-none border-none cursor-pointer text-xl text-gray-400 hover:text-accent transition-colors"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-accent to-blue-600 text-white border-none px-6 py-4 rounded-full text-base font-semibold uppercase tracking-wider hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            SIGN IN
          </button>
        </form>

        <div className="text-center">
          <a href="#" className="text-accent text-sm font-medium hover:text-blue-600 transition-colors mb-4 inline-block">
            Forgot Password
          </a>
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-accent font-medium hover:text-blue-600 transition-colors">
              Create Account
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
