import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (

        <header className="text-gray-600 body-font bg-gradient-to-r from-blue-300 via-violet-300 to-purple-300">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link legacyBehavior href="/"><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className=" hover:bg-violet-200" width={100} src='/project-manager-icon.svg' />

                    <span className="ml-3 text-2xl hover:text-gray-400 font-bold">PROJECT MASTER</span>
                </a></Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link legacyBehavior href="/"><a className="mr-5 hover:text-gray-400 font-bold text-xl">HOME</a></Link>
                    <Link legacyBehavior href="/projects"><a className="mr-5 hover:text-gray-400 font-bold text-xl">PROJECTS</a></Link>
                </nav>
                <Link legacyBehavior href="/signin">
                    <a>
                        <button className="inline-flex items-center text-white font-bold bg-violet-600 border-0 py-1 md:py-2 px-2 md:px-4 my-2 focus:outline-none hover:bg-violet-400  hover:text-black rounded text-md mt-4 md:mt-0 mr-2">Sign In</button>
                    </a>
                </Link>
                <Link legacyBehavior href="/signup">
                    <a>
                        <button className="inline-flex items-center text-white font-bold bg-violet-600 border-0 py-1 md:py-2 px-2 md:px-4 my-2 focus:outline-none hover:bg-violet-400  hover:text-black rounded text-md mt-4 md:mt-0 ml-2">Sign Up</button>
                    </a>
                </Link>
            </div>
        </header>
    )
}

export default NavBar

