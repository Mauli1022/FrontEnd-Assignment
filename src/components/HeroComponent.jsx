import React from 'react'

export default function HeroComponent() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-12 md:py-24">
      
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/Uncover.jpg"
          alt="Mobile Preview"
          className="shadow-lg max-w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 ml-6 text-center md:text-left space-y-6 md:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Start Organizing Your Life Today
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0">
          Join us now and transform your productivity with our intuitive to-do list platform!
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
            Sign Up
          </button>
          <button className="border border-red-400 text-red-500 px-6 py-3 rounded-md hover:bg-red-50 transition">
            Learn More
          </button>
        </div>
      </div>

    </section>
  )
}
