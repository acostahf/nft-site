import React, { useState } from 'react'
import {MenuIcon} from '@heroicons/react/outline'
function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const handleClick = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    <div className=' h-20 w-screen fixed'>
        <div className=' h-full w-full justify-between items-center px-2 flex '>
          <div className='flex items-center'>

            {/* LOGO */}
            <h1 className='text-3xl lg:text-4xl mx-4 font-bold'>NFT </h1>
          </div>
            {/* MIDDLE MENU ITEMS */}
            <div className=' mx-12 hidden lg:flex'>
              <ul className='hidden lg:flex '>
                <li className='navBarLi'>Home</li>
                <li className='navBarLi'>About</li>
                <li className='navBarLi'>Roadmap</li>
                <li className='navBarLi'>Showcase</li>
                <li className='navBarLi'>Team</li>
              </ul>
            </div>

            
          {/* HAMBURGER MENU ICON   */}
          
          <div className='lg:hidden' onClick={handleClick}>
            {!hamburgerOpen ? <MenuIcon className='w-5' /> : <p>down icon</p> }
              
            </div>
          <div className='hidden lg:flex '>
              <button className='bg-indigo-600 text-white rounded-lg px-8 py-3'>Connect wallet</button>
            </div>
          <div className='lg:hidden rounded-full bg-emerald-400'>
            <p>Circle</p>

          </div>
         

        </div>

        {/* DROPDOWN MENU */}

        <ul className={!hamburgerOpen ? 'hidden' : 'absolute flex flex-col items-center bg-slate-700 w-full px-8 '}>
                <li className='navBarLi'>Home</li>
                <li className='navBarLi'>About</li>
                <li className='navBarLi'>Roadmap</li>
                <li className='navBarLi'>Showcase</li>
                <li className='navBarLi'>Team</li>
                <div className='flex flex-col'>
                  <button className='bg-indigo-600 text-white rounded-lg px-8 py-3'>Connect wallet</button>
                </div>
                
        </ul>
        

    </div>
  )
}

export default Navbar