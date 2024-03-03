import React from 'react'
import './header.scss'
import logo from '../../assets/logo/logo.png'

export default function Header() {
  return (
    <div className='header-main'>
      <div className="container">
        <Header>
          <div className="logo">
            <img src={logo} alt="logo-png" />
          </div>
        </Header>
      </div>
    </div>
  )
}
