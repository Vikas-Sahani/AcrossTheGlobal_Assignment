import React from 'react'
import heroImg from "./images/Rectangle 2.svg";


function Hero() {
  return (
    <>
        <div className="heroImg">
          <img src={heroImg} alt="heroImg" />
        </div>
        <div className='heroText'>
            <h2>Computer Engineering</h2>
            <p>142,765 Computer Engineers follow this</p>
        </div>
        <hr className='heroLine'/>
    </>

  )
}

export default Hero