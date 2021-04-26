import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { HashRouter } from 'react-router-dom';

import Logo from '../templates/logo/Logo';
import Nav from '../templates/nav/Nav';
import Footer from '../templates/footer/footer';
import Routes from '../templates/routes/Routes';


const App = (props) =>

    <HashRouter>

        <div className="app">

            <Logo />
            <Nav />
            <Routes />
            <Footer />

        </div>

    </HashRouter>


export default App