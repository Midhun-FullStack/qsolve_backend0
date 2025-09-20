import React from 'react'

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-lg w-full text-center bg-white p-8 sm:p-12 rounded-3xl shadow-xl">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-accent mb-2 tracking-wider">QSOLVE</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">B.Tech. Semester 4</h2>
          <p className="text-base text-gray-600 font-medium">Mechanical/Civil/Computer Science</p>
        </div>

        <div className="mb-8">
          <p className="text-base leading-relaxed text-gray-700 text-justify">
            The application is designed to get to your Solved University Question Papers fastest.
            This will help you to get acquainted with the examination pattern, how questions are
            being framed and, to do trend spotting and find important questions. This also leads
            students to the depth which the topic should be studied.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-1">A Product of</p>
          <p className="text-xl font-semibold text-gray-800">ECREFERENCE BOOKS</p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white border-none px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wider min-w-[200px] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            NEW USER
          </button>
          <button className="bg-gradient-to-r from-accent to-blue-600 text-white border-none px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wider min-w-[200px] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
