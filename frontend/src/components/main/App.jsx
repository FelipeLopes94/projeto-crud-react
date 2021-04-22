import React from 'react';
import './App.css';

import Logo from '../templates/logo/Logo';
import Nav from '../templates/nav/Nav';
import Footer from '../templates/footer/footer';
import Main from '../templates/Main';


const App = (props) =>

    <div className="app">

        <Logo/>
        <Nav/>
        <Main/>
        <Footer/>

    </div>

export default App