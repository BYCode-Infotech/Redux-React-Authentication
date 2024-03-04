import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/header'

export default function Defaultlayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
