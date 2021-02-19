import React from 'react';
import './header.css';
import Logo from '../../assets/images/logo.jpg';
import User from '../../assets/images/user.jpg';
import DownArrow from '../../assets/images/downArrow.png';
import history from '../../browseHistory/history'

function Header() {

  /**
 * @description function is used to redirect the page to home page.
 *
 * @parameters void
 * @return void
 */
  function redirectHome() {
    history.push('/');
  }

  return (
    <div>
      <header >
        <div className="headerLeft">
          <img src={Logo} className="logo" onClick={() => redirectHome()}></img>
          <div className="menuTitle">My Application</div>
          <img src={DownArrow} className="downArrow"></img>
        </div>

        <div className="headerRight">
          <div>
            <img src={User} className="userImage"></img>
          </div>
          <div className="userName">
            Barde Ridel
            </div>
          <img src={DownArrow} className="downArrow"></img>
        </div>
      </header>
    </div>
  );
}

export default Header;
