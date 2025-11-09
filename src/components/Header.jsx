import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="navbar flex justify-between p-6 bg-black text-white mb-2 shadow-lg">
            <div className="logo">
               <h1 className='text-2xl font-bold'>AG Charts</h1>
            </div>
           <div>
           <ul className="flex gap-5 font-semibold ">
                <li className="hover:bg-white hover:text-black py-2 px-4 ">Home</li>
                <li className="hover:bg-white hover:text-black py-2 px-4 ">Products</li>
                <li className="hover:bg-white hover:text-black py-2 px-4 ">Services</li>
                <li className="hover:bg-white hover:text-black py-2 px-4 ">About</li>
                <li className="hover:bg-white hover:text-black py-2 px-4 ">Contact</li>
            </ul>
           </div>
        </nav>
    </div>
  )
}

export default Header