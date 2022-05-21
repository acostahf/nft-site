import React, { useState } from 'react'
import Link from 'next/link'
function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const handleClick = () => {
    setHamburgerOpen(!hamburgerOpen)
    console.log('Clicked')
  }
  return (
    <div className='relative container mx-auto p-6'>
        {/* FLEX CONTAINER */}
        <div className='flex justify-between items-center'>
            {/* LOGO */}
            <div className='pt-2'>
                <h1 className='logo text-2xl font-bold text-indigo-500'>NFT</h1>
            </div>
            {/* MENU */}
            <div className='hidden md:flex space-x-6'>
              <Link href="/home">
                <a  className='hover:text-slate-400 font-semibold'>Home</a>
                </Link>
                <Link href="/home">
                <a  className='hover:text-slate-400 font-semibold'>About</a>
                </Link>
                <Link href="/home">
                <a  className='hover:text-slate-400 font-semibold'>Roadmap</a>
                </Link>
                <Link href="/home">
                <a  className='hover:text-slate-400 font-semibold'>Showcase</a>
                </Link>
                <Link href="/home">
                <a  className='hover:text-slate-400 font-semibold'>Team</a>
                </Link>
            </div>
            {/* BUTTON */}
            <Link href="/home">
              <a  className='swipeBtn overflow-hidden hidden md:block p-3 px-6 pt-2 rounded-full border-2 border-black '>Connect wallet</a>
            </Link>
            

            {/* HAMBURGER MENU ICON */}
            <button onClick={handleClick} className= {!hamburgerOpen ? 'block hamburger md:hidden focus:outline-none' : 'block open hamburger md:hidden focus:outline-none'}>
              <span className='hamburger-top'></span>
              <span className='hamburger-middle'></span>
              <span className='hamburger-bottom'></span>
            </button>

        </div>

        {/* MOBILE MENU */}
        <div className='md:hidden'>
          <div className={!hamburgerOpen ? 'hidden' : 'flex-col absolute h-screen w-full items-center self-end flex py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 z-10 drop-shadow-md'}>
            <Link href="/home">
              <a >Home</a>
            </Link>
            
            <Link href="/home">
              <a >About</a>
            </Link>
            <Link href="/home">
              <a >Showcase</a>
            </Link>
            <Link href="/home">
              <a >Roadmap</a>
            </Link>
          </div>

        </div>
    </div>
  )
}

export default Navbar