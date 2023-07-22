import React from 'react'
import joinGrpIcon from "./images/baseline-group_add-24px.svg"
function MidSection() {
  return (
    <>
        <div style={{display:"flex", justifyContent:"space-between" ,width:"1040px", }}>
            <div style={{height:"25px",width:"358px", display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
                <span style={{fontWeight:"700"}}>All Posts(32)
                    <hr style={{position:"relative",border:"2px solid black",width:"93px"}}/>
                </span>
                <span>Article</span>
                <span>Event</span>
                <span>Education</span>
                <span>Job</span>
            </div>
            <div style={{display:"flex",justifyContent:"space-between" ,width:"280px"}}>
                <div className='writePost'>
                    <p>Write a Post
                        <select>
                            <option></option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </p>
                </div>

                <div className='joinGrp'>
                    <div className='image'>
                        <img src={joinGrpIcon} alt='JoinGroupIcon'/>
                    </div>
                    <span>Join Group</span>
                </div>
            </div>
        </div>
        <hr style={{width:"1040px",background: "#E0E0E0"}}/>
    </>
  )
}

export default MidSection