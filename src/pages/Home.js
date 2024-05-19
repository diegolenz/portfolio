import React, { Component } from 'react'
import background from '../assets/background.jpg'
import '../css/home.scss'
import perfil from '../assets/perfil-nb.png'


class Home extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <section className="about-me">
               {/*  <div className="photo">
                    <img src={perfil} alt="" />
                </div> */}
                <div className="introduction">
                    <span className='title'>Olá, eu sou Diego</span>
                    <p className='subtitle'>Desenvolvedor de software</p>
                    <p className='text'>Seja bem vindo ao meu portifólio</p>
                    <button className='button button-default'>Baixar Curriculo</button>
                    {/* <button className='button'>Veja mais sobre meu projeto</button> */}
                </div>
            </section>
        )
    }
}
export default Home;