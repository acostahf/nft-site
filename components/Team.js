import React from 'react'
import reactPng from './assets/logo192.png'
import Image from 'next/image'
import { BeakerIcon } from '@heroicons/react/solid'
function Team() {
  return (
      <>
       {/* HEADING */}
      <h2 className='text-4xl md:text-6xl font-bold text-center'>Meet the team</h2>
     
    <div className='max-w-6x; px-5 mx-auto pt-20  text-center md:h-screen h-[1500px] teamDiv flex justify-evenly pb-20'>
       
        
            {/* TEAM MEMBER 1 */}
            <div className='items-center justify-center flex'>
                <div className='card my-auto'>
                <div className='img-container'>
                        <Image src={reactPng} className=' person-img' alt='teamMember1'/>
                    </div>
                {/* <img src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' /> */}
                    <div className='card-content'>
                        <h2 className='card-title'>Fabian, CEO</h2>
                            <p className='card-body pb-8 '>Contact through one of these social medias</p>
                            <div className='flex flex-row justify-around'>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                            </div>
                            
                    </div>
                    </div>
                </div>

            {/* TEAM MEMBER 2 */}
            <div className='items-center justify-center flex'>
                <div className='card my-auto'>
                    <div className='img-container'>
                        <Image src={reactPng} className=' person-img' alt='teamMember1'/>
                    </div>
                    
                {/* <img src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' /> */}
                    <div className='card-content'>
                    <h2 className='card-title'>Daena, CFO</h2>
                    <p className='card-body pb-8 '>Contact through one of these social medias</p>
                            <div className='flex flex-row justify-around'>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                            </div>
                    </div>
                    </div>
                </div>

            
        

       
            {/* TEAM MEMBER 3 */}
            <div className='text-white items-center justify-center flex'>
                <div className='card my-auto'>
                <div className='img-container'>
                        <Image src={reactPng} className=' person-img' alt='teamMember1'/>
                    </div>
                {/* <img src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' /> */}
                    <div className='card-content'>
                    
                    <h2 className='card-title'>Christian, C3PO</h2>
                    <p className='card-body pb-8 '>Contact through one of these social medias</p>
                            <div className='flex flex-row justify-around'>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                            </div>
                    </div>
                    </div>
                </div>

            {/* TEAM MEMBER 4 */}
            <div className='items-center justify-center flex'>
                <div className='card my-auto'>
                
                    <div className='img-container'>
                        <Image src={reactPng} className=' person-img' alt='teamMember1'/>
                    </div>
                {/* <img src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' /> */}
                    <div className='card-content'>
                    <h2 className='card-title'>Artist, CAIO</h2>
                    <p className='card-body pb-8 '>Contact through one of these social medias</p>
                            <div className='flex flex-row justify-around'>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                                <BeakerIcon className="h-5 w-5 text-blue-500"/>
                            </div>
                    </div>
                    </div>
                </div>

            
        
    </div>
    </>
  )
}

export default Team