import React, { useState } from 'react';
import './header.scss';
import logo from '../../../assets/logo/BYCODE_White png.png';
import { IoMenu } from "react-icons/io5";

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='header py-2 bg-black'>
            <div className="container">
                <header className='flex items-center justify-between'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="menu flex">
                        <div className="menu-items px-4 text-white">
                            <a href="home">Home</a>
                        </div>
                        <div className="menu-items px-4 text-white">
                            <a href="pages">Pages</a>
                        </div>
                    </div>
                    <div className="menu-mobile text-white" onClick={toggleSidebar}>
                        <IoMenu className='menu-icon' />
                    </div>
                </header>
                {isSidebarOpen && (
                    <div className="sidebar text-white">
                        <ul>
                            <li>Home</li>
                            <li>Pages</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
