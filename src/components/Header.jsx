import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="navbar d-flex justify-content-between">
            <div className="logo">
               <h1>AG Charts</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header