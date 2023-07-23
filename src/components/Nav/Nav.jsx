import whole from "./Images/whole.svg";
import searchIcon from "./Images/baseline-search-24px.svg";

import React from 'react'
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <>
        <nav>
          <div id="whole">
            <img src={whole} alt="whole" />
          </div>
          <div className="search">
            <div className="searchImg">
              <img src={searchIcon} alt="searchImg" />
            </div>
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
          <div className="register">
            <p>
              Create account. <span onClick={()=>{
                navigate("/sign-up");
              }}>It's free!</span>
            </p>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </nav>

    </>
  )
}

export default Nav