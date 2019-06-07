import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../images/Logo.png';
import pdf from '../images/insight-sample.pdf';
class Header extends Component {
  render() {
    return (
      <header className="header container d-flex justify-content-between align-items-center my-3">
        <div className="header__logo">
          <img src={Logo} />
        </div>
        <div className="header__menu d-flex">
          <li>
            <a href={pdf} download className="menu-link">See insight example</a>
          </li>
          <li>
            {/* <a href="#" className="menu-link">Sign up for beta</a> */}
            <AnchorLink className="menu-link" href='#signup'>Sign up for beta</AnchorLink>
          </li>
          {/* <li>
            <a href="#" className="menu-link">Pricing</a>
          </li>
          <li className="d-none d-sm-block">
            <a href="#" className="btn btn--basic btn--rounded pt-0">Signup for beta</a>
          </li> */}
        </div>
        {/* <div className="d-block d-sm-none mt-2">
          <a href="#" className="btn btn--basic btn--rounded pt-0">Signup for beta</a>
        </div> */}
      </header>
    )
  }
}

export default Header;
