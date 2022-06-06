import React from 'react'
import reactPng from './assets/logo192.png'
import { BeakerIcon } from '@heroicons/react/solid'
function Footer() {
  return (
      <footer className='bg-red-500 pt-20'>
        {/* CONTAINER */}
        <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
            <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
                {/* LOGO */}
                <div>
                    
                </div>
                {/* LINK 1 */}
                <div className='flex justify-center space-x-4'>
                    <BeakerIcon />
                </div>
                {/* LINK 1 */}
                <div className='flex justify-center space-x-4'>
                    <BeakerIcon />
                </div>
                {/* LINK 1 */}
                <div className='flex justify-center space-x-4'>
                    <BeakerIcon />
                </div>

            </div>

        </div>
    </footer>
  )
}

export default Footer