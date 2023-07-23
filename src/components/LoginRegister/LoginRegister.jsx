import React, { useState } from 'react'
import clear from "../SideComponent/images/clear24px.svg"
import LogRegImg from "./images/LogRegImg.svg"
import fbLogo from "./images/fbLogo.svg"
import gglLogo from "./images/googleLogo.svg"

function LoginRegister() {
    const [isLogin, setIsLogin] = useState(false);
  return (
    <>
        <div className='LogRegPg'>
            <div className='clear'>
                <img src={clear} alt='clear'/>
            </div>
            <div className='coverLogin'>
                <div className='logReg'>
                    <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>
                <div className='createAcc'>
                    <div className='SignUpform'>
                        <form>
                            {isLogin?<h1>Sign In</h1>:<h1>Create Account</h1>}
                            
                            {isLogin?<>
                                <input type='text' placeholder='Email'/>
                                <input type='text' placeholder='Password'/>
                            </>:
                            <>
                                <input type='text' placeholder='First Name'/>
                                <input type='text' placeholder='Last Name'/>
                                <input type='text' placeholder='Email'/>
                                <input type='text' placeholder='Password'/>
                                <input type='text' placeholder='Confirm Password'/>
                            </>}
                            
                            <button>{isLogin?"Sign in":"Create Account"}</button>

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
                            {isLogin?<p style={{textAlign:"center", margin:"2% 0%", cursor:"pointer"}}>Forgot Password?</p>:""}
                            
                        </form>
                        
                    </div>
                    <div className='logRegImg'>
                        {isLogin?
                        <p>Don’t have an account yet?<span> Create new for free!</span></p>:
                        <p>Already have an account? <span>Sign In</span></p>}
                        
                        <div>
                            <img src={LogRegImg} alt='logRegImg'/>
                        </div>
                        {isLogin?"":
                        <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>}
                    </div>
                </div>

            </div>
        </div>
        <div className='bgLogRegPg'></div>
        
    
    </>
  )
}

export default LoginRegister