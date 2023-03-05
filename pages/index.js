import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="flex h-screen bg-gradient-to-br from-gray-200 to-gray-100">
        <div className="container mx-auto px-8 py-16">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-2xl font-bold mb-2 font-serif">
              Welcome!
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <div className="container px-5 py-20 mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Your all-in-one solution for project management. With our easy-to-use tools and intuitive interface, you can streamline your projects, collaborate with your team, and stay on top of your tasks. Whether you're a freelancer or part of a team, Project Master has everything you need to keep your projects organized and on track. Sign up now to see how we can help you take your projects to the next level.
            </p>
          </div>
        </div>
      </div>
    </>

  )
}
