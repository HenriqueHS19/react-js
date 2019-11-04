import React from  'react';

import './style.css';

//logo
import logo from '../../img/header/logo.png';

const Header = function(){
    return (
        <header>
            <a href="/" className="logo"> <img src={logo} alt="New Age"></img> </a>

            <nav className="menu">
                <ul> 
                    <li>
                        <a href="/"> Sobre </a>
                    </li>

                    <li>
                        <a href="/"> Serviços </a>
                    </li>

                    <li>
                        <a href="/"> Equipe </a>
                    </li>

                    <li>
                        <a href="/"> Contato </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;