import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icone.png'
import background from '../../assets/background.jpg'
import '../../css/nav.scss';
import { BsListTask } from 'react-icons/bs'



function handleSubmit(e) {
    e.preventDefault();
    console.log('a')
    console.log(e)
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
        
        let theme = darkCheck? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        setChecked(!darkCheck);
    };

    return (
        <div>
            <div className="my-navbar" >

                <div className="navbar-menu">
                    <a aria-current="page" className="nav-item nav-link active" href="/products">Home</a>
                    <a aria-current="page" className="nav-item nav-link active" href="/products">Sobre mim</a>
                    <a aria-current="page" className="nav-item nav-link active" href="/products">Entre em contato</a>


                    <label>
                        <input id="theme-switch"
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
