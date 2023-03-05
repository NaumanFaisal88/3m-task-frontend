import React from 'react'
import NavBar from '@/components/NavBar'

const projects = () => {
    return (
        <>
            <NavBar />
            <div className="flex min-h-screen bg-gradient-to-br from-gray-200 to-gray-100">
                <div className="container mx-auto px-8 py-16">
                    <section className="text-gray-800 body-font">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="text-2xl font-bold mb-2 font-serif">Projects</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -mx-4 -my-8">

                                <div className="py-8 px-4 lg:w-1/3">
                                    <div className="h-full flex flex-col items-start border-gray-300 border p-6 rounded-lg bg-white shadow-md">
                                        <div className="flex-grow w-full">
                                            <h2 className="text-lg font-bold text-gray-900 mb-3">Project Title 1</h2>
                                            <p className="leading-relaxed mb-6 text-gray-800 font-sans">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-sm font-medium text-gray-600 mr-2 font-sans">Tasks: 3</p>
                                            <a href="projects/tasks" className="inline-flex items-center hover:bg-violet-400  hover:text-black py-2 px-4 rounded-md bg-violet-600 text-white text-sm font-semibold font-sans tracking-wider">View Tasks</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8 px-4 lg:w-1/3">
                                    <div className="h-full flex flex-col items-start border-gray-300 border p-6 rounded-lg bg-white shadow-md">
                                        <div className="flex-grow w-full">
                                            <h2 className="text-lg font-bold text-gray-900 mb-3">Project Title 2</h2>
                                            <p className="leading-relaxed mb-6 text-gray-800 font-sans">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-sm font-medium text-gray-600 mr-2 font-sans">Tasks: 4</p>
                                            <a href="projects/tasks" className="inline-flex items-center hover:bg-violet-400  hover:text-black py-2 px-4 rounded-md bg-violet-600 text-white text-sm font-semibold font-sans tracking-wider">View Tasks</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-8 px-4 lg:w-1/3">
                                    <div className="h-full flex flex-col items-start border-gray-300 border p-6 rounded-lg bg-white shadow-md">
                                        <div className="flex-grow w-full">
                                            <h2 className="text-lg font-bold text-gray-900 mb-3">Project Title 3</h2>
                                            <p className="leading-relaxed mb-6 text-gray-800 font-sans">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-sm font-medium text-gray-600 mr-2 font-sans">Tasks: 2</p>
                                            <a href="projects/tasks" className="inline-flex items-center hover:bg-violet-400  hover:text-black py-2 px-4 rounded-md bg-violet-600 text-white text-sm font-semibold font-sans tracking-wider">View Tasks</a>
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


export default projects