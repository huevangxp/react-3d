import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="navbar flex justify-content-between p-6 bg-black text-white ">
            <div className="logo">
               <h1>AG Charts</h1>
            </div>
           <div>
           <ul className="flex gap-5">
                <li>Home</li>
                <li>Products</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           </div>
        </nav>
    </div>
  )
}

export default Header