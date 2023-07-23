import React, { useState } from 'react'
import location from "./images/location24px.svg"
import edit from "./images/edit24px.svg"
import clear from "./images/clear24px.svg"
import errOutline from "./images/error_outline24px.svg"

function SideComponent() {
    const [isEdit, setIsEdit] =useState(false);
  return (
    <div className='sideComponent'>
        <div className='locationEditErr'>
            <div className='location'>
                <span className='size'>
                    <img src={location} alt='location'/>
                </span>
                <input type='text' placeholder='Enter your location' />
                <hr/>
            </div>
            <span className='size' onClick={()=>{
                setIsEdit(!isEdit);
            }}>
                {isEdit?
                    <img src={edit} alt='edit'/>:
                    <img src={clear} alt='clear'/>
                }              
            </span>
        </div>
        <div className='errOutline'>
            <span className='size'>
                <img src={errOutline} alt='error_outline'/>
            </span>
            <p>Your location will help us serve better and extend a personalised experience.</p>
        </div>
    </div>
  )
}

export default SideComponent