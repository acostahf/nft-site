import React from 'react'
import reactPng2 from '../assets/logo192.png'
function Hero() {
  return (
    <div className='w-full h-screen flex flex-col justify-between mainHeroDiv'>
        <div className='grid  md:grid-cols-2 max-w-[1240px] m-auto'>
            
            {/* NFT/IMAGE ON RIGHT SIDE */}
            <div>
                <img className='m-auto pb-12 md:pb-0 md:ml-2' src={reactPng2} alt='nft hero image'/>

            </div>
            <div>
                {/* TEXT ON LEFT SIDE */}
                <div className='w-full  flex flex-col justify-center md:items-start px-2 py-1'>
                    <h1 className='text-4xl'>Discover A New Era of <br /> <span>NFTs</span></h1>
                    <h4 className='py-4 text-gray-400'>Buy our mugs they are cool</h4>
                    <button className='bg-indigo-600 text-white rounded-xl px-8 mx-32 md:mx-0 py-3'>Explore</button>
                </div>
                
            </div>
        </div>


    </div>
  )
}