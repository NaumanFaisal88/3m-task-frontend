import React from 'react'
import NavBar from '@/components/NavBar'

const signup = () => {
    return (
        <>
            <NavBar />
            <div className="flex min-h-screen bg-gradient-to-br from-gray-200 to-gray-100">
                <div className="m-auto w-full max-w-md">
                    <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 font-serif">
                            Create an Account
                        </h1>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
                                    First Name
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                    id="firstName" type="text" placeholder="Enter your first name" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                    id="lastName" type="text" placeholder="Enter your last name" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                    id="username" type="text" placeholder="Enter your username" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                    id="email" type="email" placeholder="Enter your email address" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                    id="password" type="password" placeholder="Enter your password" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
                                    Confirm Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                    id="confirm-password" type="password" placeholder="Confirm your password" required />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <button
                                    className="bg-violet-600 hover:bg-violet-400 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>


    )
}

export default signup