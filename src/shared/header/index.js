import React from 'react'
import './header.scss'
import logo from '../../assets/logo/logo.png'
import { CgMenuRight } from "react-icons/cg";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-main'>
      <div className="container">
        <header>
          <div className="logo">
            <img src={logo} alt="logo-png" />
          </div>
          <div className="menu">
            <Link to={"/home"} className="menu-items">
              <a href="HOME">Home</a>
            </Link>
            <Link to={"/services"} className="menu-items">
              <a href="SERVICES">Services</a>
            </Link>
            <Link to={"/our Company"} className="menu-items">
              <a href="COMPANY">Our Company</a>
            </Link>
            <Link to={"/hire-us"} className="menu-items">
              <a href="HIRE US">Hire us</a>
            </Link>
            <Link to={"/programs"} className="menu-items">
              <a href="PROGRAMS">Programs</a>
            </Link>
            <CgMenuRight className='menu-icon' />
          </div>
        </header>
      </div>
    </div>
  )
}
