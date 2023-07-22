import whole from "../Assets/whole.svg";
import searchIcon from "../Assets/baseline-search-24px.svg";

import React from 'react'

function Nav() {
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
              Create account. <span>It's free!</span>
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