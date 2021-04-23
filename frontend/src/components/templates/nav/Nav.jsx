import React from 'react';
import './Nav.css';

const Nav =  (props) =>

    <aside className="menu-area">
        
        <nav className="menu">

            <a href="#/users">
                <i className="fa fa-home"> Inicio </i>
            </a>

            <a href="#/users">
                <i className="fa fa-users"> Usuarios </i>
            </a>

        </nav>

    </aside>

export default Nav