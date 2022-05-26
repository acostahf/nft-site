import React from 'react'
import reactPng from './assets/logo192.png'
import wavePng from './assets/wave.png'
import Image from 'next/image'
function Hero() {
  return (
    <>
    {/* added mr-4 to adjust */}
    <div className='container h-screen md:w-5/6 sm:mr-4 items-center px-6 mx-auto mt-5 space-y-0 md:space-y-0 flex flex-col-reverse md:flex-row pb-40'>
        {/* TEXT ON LEFT */}
        <div className='flex flex-col mb-32 space-y-6 md:w-1/2'>
            <h1 className='max-w-md text-4xl md:text-6xl font-bold text-center  md:text-left'>Discover a new era of NFTs</h1>
            <p className='max-w-sm text-center text-slate-500 md:text-left'>Buy our mugs they are really cool</p>
            <button  className="simpleBtn z-10 overflow-hidden hidden md:block p-3 px-6 pt-2 w-1/3  rounded-xl   ">
						Check out collection
					</button>

        </div>
        {/* NFT IMAGE */}
        <div className='md:w-1/2 md:pl-20  mb-32 pb-20 '>
            <Image src={reactPng} alt='nft'/>
            {/* <img src={reactPng} alt='nft'/> */}
        </div>
    </div>
    <div className='waves'>
            <div className='wave' id='wave1'></div>
            <div className='wave' id='wave2'></div>
            <div className='wave' id='wave3'></div>
            <div className='wave' id='wave4'></div>
        </div>
    
    </>
  )
}

export default Hero
