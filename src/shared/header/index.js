import React from 'react'
import './header.scss'
import logo from '../../assets/logo/logo.png'
import { CgMenuRight } from "react-icons/cg";

export default function Header() {
  return (
    <div className='header-main'>
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="logo-png" />
          </div>
          <div className="menu">
            <div className="menu-items">
              <a href="HOME">Home</a>
            </div>
            <div className="menu-items">
              <a href="SERVICES">Services</a>
            </div>
            <div className="menu-items">
              <a href="COMPANY">Our Company</a>
            </div>
            <div className="menu-items">
              <a href="HIRE US">Hire us</a>
            </div>
            <CgMenuRight className='menu-icon' />
          </div>
        </header>
      </div>
    </div>
  )
}
