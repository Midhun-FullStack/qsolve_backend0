import React from 'react'

const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-5 h-5 border-2',
    medium: 'w-10 h-10 border-4',
    large: 'w-15 h-15 border-6'
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-[200px] gap-4">
      <div
        className={`border-gray-300 border-t-primary rounded-full animate-spin ${
          sizeClasses[size] || sizeClasses.medium
        }`}
      ></div>
      {text && <p className="text-gray-600 m-0">{text}</p>}
    </div>
  )
}

export default LoadingSpinner
