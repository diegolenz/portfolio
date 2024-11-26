import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icone.png'
import background from '../../assets/background.jpg'
import '../../css/nav.scss';
import { BsListTask } from 'react-icons/bs'
import logoMnu from './../../assets/fatura-solar-icon.png'



function handleSubmit(e) {
    e.preventDefault();
    if (e?.target?.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
    /*     if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        
            if (currentTheme === 'dark') {
              toggleSwitch.checked = true;
            }
          } */
}

function Nav() {
    const toggleSwitch = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('theme');
    const [menuAtivo, setMenuAtivo] = useState(false);

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    const [darkCheck, setChecked] = React.useState(currentTheme === 'dark');

    const handleChange = () => {

        let theme = darkCheck ? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        setChecked(!darkCheck);
    };

    // Alterna entre abrir/fechar o menu
    const toggleMenu = () => {
        console.log(menuAtivo);
        setMenuAtivo(!menuAtivo);
    };

    return (
        <nav className="navbar">

            <div className="menu-toggle" onClick={toggleMenu}>
                <span className="menu-icon">&#9776;</span> 
                <span className="close-icon">&times;</span> 
            </div>

            {/*  <a className="navbar-brand" href="#">
                        <img src={logoMnu} alt="Logo" width="100" height="50" className="d-inline-block align-text-top" />
                    </a> */}
            {/*   <ul className="navbar-menu left-menu">
                <li>   <a aria-current="page" className="nav-item nav-link active menu-item " href="/products">Home</a></li>
                <li> <a aria-current="page" className="nav-item nav-link active menu-item " href="/products">Sobre</a></li>
            </ul> */}

            <div className="navbar-icon">
                <a className="navbar-brand" href="#">
                    <img src={logoMnu} alt="Logo" className="d-inline-block align-text-top" />
                </a>
            </div>

            {/*  <ul className="navbar-menu right-menu">
                <li> <a aria-current="page" className="nav-item nav-link active menu-item " href="/products">Entre em contato</a></li>
                <li>
                    <label className="nav-item nav-link active menu-item ">
                        <input id="theme-switch "
                            type="checkbox"
                            checked={darkCheck}
                            onChange={handleChange}
                        />
                        Light/Dark
                    </label>
                </li>
            </ul> */}

            <ul className={`navbar-menu ${menuAtivo ? 'navbar-menu-active' : 'navbar-menu-inactive'}`}>
                <li>   <a href="/products">Inicio</a></li>
                <li> <a   href="/products">Sobre</a></li>
            </ul>




            {/* <a className="config">
                        <BsListTask />
                    </a> */}
        </nav>
    );
}

export default Nav
