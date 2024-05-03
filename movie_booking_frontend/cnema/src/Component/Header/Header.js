import React from 'react'
import './Header.css'

import Logo from '../Assets/CNEMA.png'

const Header = () => {
  return (
    <div className="header-cnema">
      <div className="container">
        <div>
          <div className="child child-1">
            <img src={Logo} alt="" />
          </div>
          <div className="child child-2">
            <ul className="navbar">
              <li className="child-navbar navbar-1">Movies</li>
              <li className="child-navbar navbar-2">News</li>
              <li className="child-navbar navbar-3">Actors</li>
              <li className="child-navbar navbar-4">More</li>
            </ul>
          </div>
          <div className="child child-3">
            <div className="signin-button">
              <button className="user-signin sign-in" action="/">
                Sign out
              </button>
            </div>
            <div className="hello-user">
              <span className="user-signin user-name">Xin chào, Trần Thuận</span>
            </div>
          </div>
        </div>
        

        
      </div>
    </div>
  )
}

export default Header