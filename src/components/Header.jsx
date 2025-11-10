import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', path: '/pages/home' },
    { name: 'Earth', path: '/pages/earth' },
    { name: 'Services', path: '/pages/services' },
    { name: 'About', path: '/pages/about' },
    { name: 'Contact', path: '/pages/contact' },
  ]

  return (
    <header className="bg-black text-white shadow-lg">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div
          className="cursor-pointer"
          onClick={() => navigate('/pages/home')}
        >
          <h1 className="text-2xl font-bold">AG Charts</h1>
        </div>

        {/* Navigation Menu */}
        <ul className="flex gap-5 font-semibold">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => navigate(item.path)}
              className="hover:bg-white hover:text-black py-2 px-4 rounded-lg cursor-pointer transition-colors duration-300"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
