import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex flex-col items-center justify-center p-4 lg:p-8 w-full">
      <div className="text-center mb-8 lg:mb-12 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-8 lg:mb-12">B.Tech. Semester 4</h1>
      </div>

      <div className="mb-8 lg:mb-12 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 xl:gap-8 max-w-none lg:max-w-7xl xl:max-w-none mx-auto">
          {/* Mechanical Course */}
          <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-200 w-full max-w-sm lg:max-w-md xl:max-w-lg flex items-center gap-3 lg:gap-4 hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="flex-shrink-0">
              <div className="w-12 h-16 lg:w-14 lg:h-18 xl:w-16 xl:h-20 relative perspective-1000 transform-style-preserve-3d transition-transform duration-300 hover:rotate-y-[-15deg]">
                <div className="w-full h-full relative transform-style-preserve-3d rounded border-2 shadow-md bg-gradient-to-br from-orange-400 to-red-500">
                  <div className="absolute right-0 top-0 w-1 h-full bg-black/30 rounded-r"></div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-1 lg:mb-2">Mechanical</h3>
              <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Rs. 148.00</p>
              <div className="flex flex-col gap-2">
                <button className="bg-gray-100 text-gray-700 border border-gray-300 px-3 py-1 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-medium hover:bg-gray-200 transition-colors">
                  Sample Pages
                </button>
                <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white border-none px-3 py-1 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-semibold uppercase tracking-wide hover:shadow-md transition-all duration-200">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* Civil Course */}
          <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-200 w-full max-w-sm lg:max-w-md xl:max-w-lg flex items-center gap-3 lg:gap-4 hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="flex-shrink-0">
              <div className="w-12 h-16 lg:w-14 lg:h-18 xl:w-16 xl:h-20 relative perspective-1000 transform-style-preserve-3d transition-transform duration-300 hover:rotate-y-[-15deg]">
                <div className="w-full h-full relative transform-style-preserve-3d rounded border-2 shadow-md bg-gradient-to-br from-green-400 to-emerald-500">
                  <div className="absolute right-0 top-0 w-1 h-full bg-black/30 rounded-r"></div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-1 lg:mb-2">Civil</h3>
              <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Rs. 148.00</p>
              <div className="flex flex-col gap-2">
                <button className="bg-gray-100 text-gray-700 border border-gray-300 px-3 py-1 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-medium hover:bg-gray-200 transition-colors">
                  Sample Pages
                </button>
                <button className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-none px-3 py-1 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-semibold uppercase tracking-wide hover:shadow-md transition-all duration-200">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* Computer Science Course */}
          <div className="bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-200 w-full max-w-sm lg:max-w-md xl:max-w-lg flex items-center gap-3 lg:gap-4 hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
            <div className="flex-shrink-0">
              <div className="w-12 h-16 lg:w-14 lg:h-18 xl:w-16 xl:h-20 relative perspective-1000 transform-style-preserve-3d transition-transform duration-300 hover:rotate-y-[-15deg]">
                <div className="w-full h-full relative transform-style-preserve-3d rounded border-2 shadow-md bg-gradient-to-br from-blue-400 to-blue-500">
                  <div className="absolute right-0 top-0 w-1 h-full bg-black/30 rounded-r"></div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-1 lg:mb-2">Computer Science</h3>
              <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Rs. 148.00</p>
              <div className="flex flex-col gap-2">
                <button className="bg-gray-100 text-gray-700 border border-gray-300 px-3 py-1 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-medium hover:bg-gray-200 transition-colors">
                  Sample Pages
                </button>
                <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white border-none px-3 py-1 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-semibold uppercase tracking-wide hover:shadow-md transition-all duration-200">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center w-full">
        <button className="inline-flex items-center gap-2 bg-white text-gray-700 border-2 border-gray-300 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:-translate-y-0.5">
          <span>📋</span>
          View Syllabus
        </button>
      </div>
    </div>
  )
}

export default Home
