"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes, FaSearch, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Navbar() {
  const [nav, setNav] = useState(false)

  const handleClick = () => setNav(!nav)

  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white text-3xl">My Blog</div>
      <div className="hidden md:flex space-x-4 items-center">
        <Link href="/" className="text-white hover:underline">Home</Link>
        <Link href="/categories" className="text-white hover:underline">Categories</Link>
        <Link href="/about" className="text-white hover:underline">About</Link>
        <Link href="/contact" className="text-white hover:underline">Contact</Link>
        <Link href="/login" className="text-white hover:underline">Login</Link>
        <div className="relative">
          <input type="text" placeholder="Search..." className="p-2 rounded" />
          <FaSearch className="absolute right-2 top-2 text-gray-500" />
        </div>
        <div className="flex space-x-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white" />
          </a>
        </div>
      </div>
      <div className="md:hidden" onClick={handleClick}>
        {nav ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
      </div>
      <div className={`absolute top-0 left-0 w-full h-screen bg-blue-500 flex flex-col items-center justify-center transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <Link href="/" className="text-white text-2xl py-2" onClick={handleClick}>Home</Link>
        <Link href="/categories" className="text-white text-2xl py-2" onClick={handleClick}>Categories</Link>
        <Link href="/about" className="text-white text-2xl py-2" onClick={handleClick}>About</Link>
        <Link href="/contact" className="text-white text-2xl py-2" onClick={handleClick}>Contact</Link>
        <Link href="/login" className="text-white text-2xl py-2" onClick={handleClick}>Login</Link>
        <div className="relative mt-4">
          <input type="text" placeholder="Search..." className="p-2 rounded" />
          <FaSearch className="absolute right-2 top-2 text-gray-500" />
        </div>
        <div className="flex space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white" />
          </a>
        </div>
      </div>
    </nav>
  )
}
