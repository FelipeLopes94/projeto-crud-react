import React from 'react';
import './Main.css';
import Header from './header/Header';


const Main = (props) =>

   <React.Fragment>
       
       <Header {...props}/>

        <main className="content">

            Conteudo

        </main>


   </React.Fragment>

export default Main;