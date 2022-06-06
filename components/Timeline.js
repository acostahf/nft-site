import React, { useEffect, useRef, useState } from 'react'
function Timeline() {
    //each timeline item
    const [inView1, setInView1] = useState(false)
    const [inView2, setInView2] = useState(false)
    const [inView3, setInView3] = useState(false)
    const firstRef = useRef()
    const secondRef = useRef()
    const thirdRef = useRef()
    let items = [inView1,inView2,inView3]
    // let items = document.querySelectorAll(".timeline li");
    useEffect (() => {
        
        // console.log(items)//
        
        window.addEventListener("load", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
        callbackFunc()
        //
    }, [])

    

    //check if timeline item is in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      
 
//callback function for the  isElementInViewport function, if item is in viewport change it's visibility from hidden to visible //


 
function callbackFunc() {
  let refs = [firstRef,secondRef,thirdRef]
    console.log('Runnig')
  for (let i = 0; i < refs.length; i++) {
    console.log(refs[i])
    if (isElementInViewport(refs[i].current)) {
        console.log('Item is in viewport')
        unHideItems(i)
        //set item in view function //
        //
    
      // items[i].classList.add("in-view");
    }
  }
}

function unHideItems(itemNum) {
    console.log(itemNum)
    if (itemNum === 0) {
        setInView1(true)
    }
    else if (itemNum === 1) {
        setInView2(true)
    }
    else if (itemNum === 2) {
        setInView3(true)
    }
}
 


  return (
    <>
    {/* HEADING */}
    <h2 className='text-4xl md:text-6xl font-bold text-center '>Roadmap</h2>
    <section className="timeline pt-20">
  <ul>
    <li ref={firstRef} className={inView1 ? 'in-view' : 'not-in-view'}>
      <div>
        <time>1934</time>
        Some content here
      </div>
    </li>
    <li ref={secondRef} id='notFirst' className={inView2 ? 'in-view' : 'not-in-view'}>
      <div>
        <time>1934</time>
        Some content here
      </div>
    </li>
    <li ref={thirdRef} id='notFirst' className={inView3 ? 'in-view' : 'not-in-view'}>
      <div>
        <time>1934</time>
        Some content here
      </div>
    </li>
     
   
  </ul>
</section>
</>
  )
}

export default Timeline