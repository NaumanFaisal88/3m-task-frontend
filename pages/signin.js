import React, { useState } from 'react'
import { signIn, getSession, signOut } from 'next-auth/react'
import NavBar from '@/components/NavBar'
import Link from 'next/link'

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })
    if (session) {
        return {
            redirect: {
                destination: '/projects'
            }
        }
    } else {
        return {
            props: {}
        }
    }
    // return {
    //     props: {
    //         userSession: session
    //     }
    // }
}

const login = ({ userSession }) => {
    console.log('User session', userSession)
    const [message, setMessage] = useState(null)

    const handleSubmit = async (e) => {
        setMessage(null)
        e.preventDefault()
        const res = await signIn('credentials', {
            redirect: false,
            username: e.target.username.value,
            password: e.target.password.value
        })
        if (res.ok) {
            console.log('Success ', res)
            setMessage({
                status: 1,
                text: 'Successfully authenticated!'
            })
        } else {
            console.log('Error ', res)
            setMessage({
                status: 0,
                text: res.error
            })
        }
    }

    return (
        <>
            <NavBar />
            <div className="flex h-screen bg-gradient-to-br from-gray-200 to-gray-100">
                <div className="m-auto w-full max-w-md">
                    <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 font-serif">
                            Welcome Back!
                        </h1>
                        {message ? (<h1 className={message.status ? 'text-green-500' : 'text-red-500'} >{message.text}</h1>) : ('')}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                    name="username" type="text" placeholder="Enter your username or email adress" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                                    name="password" type="password" placeholder="Enter your password" />
                                <a href="#"
                                    className="block text-sm text-gray-600 mt-2 hover:text-gray-800">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="remember-me">
                                    <input
                                        className="mr-2 leading-tight"
                                        id="remember-me" type="checkbox" />
                                    <span className="text-sm">
                                        Remember Me
                                    </span>
                                </label>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <button
                                    className="bg-violet-600 hover:bg-violet-400 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit">
                                    Sign In
                                </button>
                                {userSession ? <Link
                                    href="/api/auth/signout">
                                    <a>
                                        <button className="bg-violet-600 hover:bg-violet-400 text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Signout
                                        </button>
                                    </a>
                                </Link> : ''}

                                <div className="flex flex-row items-center mt-4">
                                    <div className="h-px w-16 bg-gray-300 mr-2"></div>
                                    <span className="text-gray-500 font-semibold">
                                        or
                                    </span>
                                    <div className="h-px w-16 bg-gray-300 ml-2"></div>
                                </div>
                                <a href="/signup"
                                    className="block text-sm text-gray-500 mt-4 hover:text-black">
                                    Don't have an account? Sign Up
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default login