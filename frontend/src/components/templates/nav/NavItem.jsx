import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const NavItem = (props) =>

    <Link to={props.link}>
        <i className={`fa fa-${props.icon}`}> {props.title} </i>
    </Link>

export default NavItem;