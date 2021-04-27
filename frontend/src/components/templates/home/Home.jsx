import React from 'react';
import Main from '../Main';



const headerProps = {
    
    icon: 'home',
    title: 'Inicio',
    subtitle: 'Projeto CRUD'

}

const Home = (props) =>

    <Main {...headerProps}>

        <div className="display-4">Bem Vindo !</div>
        <hr />
        <div className="mb-0">Sistema de CRUD Desenvolvido em REACT!</div>

    </Main>



export default Home;