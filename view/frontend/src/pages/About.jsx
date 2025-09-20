import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col justify-center items-center text-center p-4 sm:p-8">
      <div className="mb-12">
        <h1 className="text-6xl sm:text-7xl font-bold text-gray-800 mb-2 tracking-wider">QSOLVE</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Solved University Question Papers</h2>
        <p className="text-xl text-gray-600 mb-1 font-medium">For B.Tech. Semester 4 Students</p>
        <p className="text-base text-gray-500 font-normal">Mechanical / Civil / Computer Science</p>
      </div>

      <div className="max-w-2xl w-full">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
          <p className="text-base leading-relaxed text-gray-700 mb-6 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <p className="text-base leading-relaxed text-gray-700 text-justify">
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
