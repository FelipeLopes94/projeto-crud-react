import React from 'react';
import './Logo.css'
import logo from '../../../assets/imgs/logo.png'

const Logo = (props) =>

    <aside className="logo">
        <a href="/" className="logo">

            <img src={logo} alt="logo do sistema"/>

        </a>
    </aside>

export default Logo;