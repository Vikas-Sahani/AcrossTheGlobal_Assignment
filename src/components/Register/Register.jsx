import React, { useState } from 'react'
import clear from "../SideComponent/images/clear24px.svg"
import LogRegImg from "./images/LogRegImg.svg"
import fbLogo from "./images/fbLogo.svg"
import gglLogo from "./images/googleLogo.svg"
import { useNavigate } from 'react-router-dom'

function LoginRegister() {
    const navigate = useNavigate()
    const [isClose, setIsClose] = useState(false);
  return (
    <>
        <div className='LogRegPg'  style={{visibility:`${isClose?"hidden":"visible"}`}}>
            <div className='clear' onClick={()=>{
                setIsClose(!isClose)
                navigate('/')
            }}>
                <img src={clear} alt='clear'/>
            </div>
            <div className='coverLogin'>
                <div className='logReg'>
                    <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>
                <div className='createAcc'>
                    <div className='SignUpform'>
                        <form>
                            <h1>Create Account</h1>
                            <input type='text' placeholder='First Name'/>
                            <input type='text' placeholder='Last Name'/>
                            <input type='text' placeholder='Email'/>
                            <input type='text' placeholder='Password'/>
                            <input type='text' placeholder='Confirm Password'/>
                            
                            <button>Create Account</button>

                            <div className='fbgglLogo'>
                                <span className='size'>
                                    <img src={fbLogo} alt='fb'/>
                                </span>
                                <p>Sign up with Facebook</p>
                            </div>
                            <div className='fbgglLogo'>
                                <span className='size'>
                                    <img src={gglLogo} alt='g'/>
                                </span>
                                <p>Sign up with Google</p>
                            </div>
                        </form>
                        
                    </div>
                    <div className='logRegImg'>
                        <p>Already have an account? <span onClick={()=>{
                            navigate("/sign-in")
                        }}>Sign In</span></p>
                        
                        <div>
                            <img src={LogRegImg} alt='logRegImg'/>
                        </div>
                        
                        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='bgLogRegPg'  style={{visibility:`${isClose?"hidden":"visible"}`}}></div>
        
    
    </>
  )
}

export default LoginRegister