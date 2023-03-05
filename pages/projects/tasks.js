import React from 'react'
import NavBar from '@/components/NavBar'

const tasks = () => {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen bg-gradient-to-br from-gray-200 to-gray-100">
        <div className="container mx-auto px-8 py-16">
          <section className="text-gray-800 body-font">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="text-2xl font-bold mb-2 font-serif">Tasks for Project 1</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -mx-4 -my-8">


                <div className="py-8 px-4 lg:w-1/2">


                  <div className="h-full flex flex-col items-start border-gray-300 border p-6 rounded-lg bg-white shadow-md">
                    <div className="flex-grow w-full">
                      <h2 className="text-lg font-bold text-gray-900 mb-3">Task Title 1</h2>
                      <p className="leading-relaxed mb-6 text-gray-800 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="task-status">
                      <p><strong>Status:</strong> In progress</p>
                      <p><strong>Timeline:</strong> Due by March 20th</p>
                    </div>
                  </div>


                </div>


                <div className="py-8 px-4 lg:w-1/2">
                  <div className="h-full flex flex-col items-start border-gray-300 border p-6 rounded-lg bg-white shadow-md">
                    <div className="flex-grow w-full">
                      <h2 className="text-lg font-bold text-gray-900 mb-3">Task Title 2</h2>
                      <p className="leading-relaxed mb-6 text-gray-800 font-sans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="task-status">
                      <p><strong>Status:</strong> In progress</p>
                      <p><strong>Timeline:</strong> Due by March 31st</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>

  )
}

export default tasks