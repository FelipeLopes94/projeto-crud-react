import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Logo from '../templates/logo/Logo';
import Nav from '../templates/nav/Nav';
import Footer from '../templates/footer/footer';
import Main from '../templates/Main';


const App = (props) =>

    <div className="app">

        <Logo/>
        <Nav/>
        <Main icon="home"  title ="Inicio"  subtitle="projeto CRUD"/>
        <Footer/>

    </div>

export default App