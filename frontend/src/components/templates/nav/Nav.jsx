import React from 'react';
import NavItem from './NavItem';
import './Nav.css';

const Nav =  (props) =>

    <aside className="menu-area">
        
        <nav className="menu">

            <NavItem title="Inicio" icon="home" link="/"/>
            <NavItem title="Usuarios" icon="users" link="/users"/>

        </nav>

    </aside>

export default Nav