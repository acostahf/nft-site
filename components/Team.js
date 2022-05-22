import React from 'react'
import reactPng from './assets/logo192.png'
import Image from 'next/image'
function Team() {
  return (
      <>
       {/* HEADING */}
      <h2 className='text-4xl font-bold text-center'>Meet the team</h2>
     
    <div className='max-w-6x; px-5 mx-auto pt-20  text-center h-screen teamDiv flex justify-evenly'>
       
        
            {/* TEAM MEMBER 1 */}
            <div className='items-center justify-center flex'>
                <div className='card my-auto'>
                <Image src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1'/>
                {/* <img src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' /> */}
                    <div className='card-content'>
                        <h2 className='card-title'>Fabian, CEO</h2>
                            <p className='card-body pb-8'>Socials could go here with icons/buttons</p>
                    </div>
                    </div>
                </div>

            {/* TEAM MEMBER 2 */}
            <div className='items-center justify-center flex'>
                <div className='card my-auto'>
                    <Image src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1'/>
                {/* <img src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' /> */}
                    <div className='card-content'>
                    <h2 className='card-title'>Daena, CFO</h2>
                            <p className='card-body pb-8'>Socials could go here with icons/buttons</p>
                    </div>
                    </div>
                </div>

            
        

       
            {/* TEAM MEMBER 3 */}
            <div className='text-white items-center justify-center flex'>
                <div className='card my-auto'>
                    <Image src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' />
                {/* <img src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' /> */}
                    <div className='card-content'>
                    
                    <h2 className='card-title'>Christian, C3PO</h2>
                            <p className='card-body pb-8'>Socials could go here with icons/buttons</p>
                    </div>
                    </div>
                </div>

            {/* TEAM MEMBER 4 */}
            <div className='items-center justify-center flex'>
                <div className='card my-auto'>
                
                <Image src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' />
                {/* <img src={reactPng} className='w-16 z-10 mx-auto relative top-[-50px]' alt='teamMember1' /> */}
                    <div className='card-content'>
                    <h2 className='card-title'>Artist, CAIO</h2>
                            <p className='card-body pb-8'>Socials could go here with icons/buttons</p>
                    </div>
                    </div>
                </div>

            
        
    </div>
    </>
  )
}

export default Team