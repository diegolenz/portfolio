import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/icone.png'
import background from '../../assets/background.jpg'
/* import '../../css/content.css' */
import '../../css/nav.scss';
import { BsListTask } from 'react-icons/bs'

function Nav() {
    return (
        <div>
            <div className="my-navbar" >
                <img src={background} alt="" />
                <div className="navbar-menu row">
                    <a aria-current="page" className="text-white nav-item nav-link active" href="/products">Home</a>
                    <a aria-current="page" className="text-white nav-item nav-link active" href="/products">About</a>
                    <a aria-current="page" className="text-white nav-item nav-link active" href="/products">Contact</a>
                    <a className="config">
                        <BsListTask />
                    </a>
                </div>

                <div className="navbar-content row">
                    <span className="col-12">Hi, I am Diego Lenz</span>
                    <span className="col-12">I'm development software and this my portifolio</span>
                    <button className="button col-12">Baixar Curriculo</button>
                </div>

            </div>

            <div className="about-me">
                <span></span>
                <span>I'm development software and this my portifolio</span>
                <span>I'm development software and this my portifolio</span>
                {/*   <a className="navbar-brand" href="#" >
    <img src={Logo} alt="" height="85px" width="100px" />
</a> */}
                <div className="navbar-nav text-white">

                    {/* <NavLink to="/products" className="nav-item nav-link">Produtos</NavLink> */}
                </div>
            </div>
        </div>
    );
}

export default Nav
