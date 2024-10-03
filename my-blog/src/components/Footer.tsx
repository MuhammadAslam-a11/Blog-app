// src/components/Footer.tsx
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const categories = [
  'Technology',
  'Health',
  'Travel',
  'Food',
  'Lifestyle',
  'Finance',
  'Education',
  'Entertainment'
]

export default function Footer() {
  return (
    <footer className="bg-red-400 p-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">Categories</h2>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link href={`/categories/${category.toLowerCase()}`} className="text-white hover:underline">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p>Email: contact@myblog.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© 2024 My Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
