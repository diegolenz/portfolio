import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icone.png'
import background from '../../assets/background.jpg'
import '../../css/nav.scss';
import { BsListTask } from 'react-icons/bs'
import logoMnu from './../../assets/logo-sem-fundo.png'



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

    return (
        <div>
            <div className="my-navbar" >

                <div className="navbar-menu">
                   {/*  <a class="navbar-brand" href="#">
                        <img src={logoMnu} alt="Logo" width="100" height="50" className="d-inline-block align-text-top" />
                    </a> */}
                    <a aria-current="page" className="nav-item nav-link active menu-item " href="/products">Home</a>
                    <a aria-current="page" className="nav-item nav-link active menu-item " href="/products">Sobre mim</a>
                    <a aria-current="page" className="nav-item nav-link active menu-item " href="/products">Entre em contato</a>


                    <label className="nav-item nav-link active menu-item ">
                        <input id="theme-switch "
                            type="checkbox"
                            checked={darkCheck}
                            onChange={handleChange}
                        />
                        Light/Dark
                    </label>
                    {/* <a className="config">
                        <BsListTask />
                    </a> */}
                </div>

            </div>
        </div>
    );
}

export default Nav
