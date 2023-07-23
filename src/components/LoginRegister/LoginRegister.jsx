import React from 'react'
import clear from "../SideComponent/images/clear24px.svg"
import LogRegImg from "./images/LogRegImg.svg"

function LoginRegister() {
  return (
    <div className='LogRegPg'>
        <div className='clear'>
            <img src={clear} alt='clear'/>
        </div>
        <div className='coverLogin'>
            <div className='logReg'>
                <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            </div>
            <div>
                <div>
                    <form>
                        <h1>Create Account</h1>
                        <input type='text' placeholder='First Name'/>
                        <input type='text' placeholder='Last Name'/>
                        <input type='text' placeholder='Email'/>
                        <input type='text' placeholder='Password'/>
                        <input type='text' placeholder='Confirm Password'/>
                        <button>Create Account</button>
                    </form>
                    <div className='fb'>
                        <span className='size'>
                            <img src={clear} alt='fb'/>
                        </span>
                        <p>Sign up with Facebook</p>
                    </div>
                    <div className='g'>
                        <span className='size'>
                            <img src={clear} alt='g'/>
                        </span>
                        <p>Sign up with Google</p>
                    </div>
                </div>
                <div className='logRegImg'>
                    <p>Already have an account? Sign In</p>
                    <div>
                        <img src={LogRegImg} alt='logRegImg'/>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default LoginRegister