import React, { Component } from 'react'
import background from '../assets/background.jpg'
import '../css/home-page.scss'
import perfil from '../assets/perfil-nb.png'
import Form from '../pages/form.js'
import logoMnu from './../assets/logo-sem-fundo.png'
import Footer from '../components/footer/Footer'
import EconomySection from '../components/apresentation/apresentation'
import Nav from '../components/nav/Nav'
import { BiBarChartAlt } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";


class Home extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div>

                <div className="background">
                    <nav className="navbar">
                        <ul>
                            <li><a href="#">Orçamento</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </nav>
                    <div className="cards-container">


                        <div className="home-card" style={{ width: "18rem" }}>
                            <div className="home-card-icon">  <GiReceiveMoney /></div>
                            <h3 className="home-card-title">Ecônomia</h3>
                            <div className="home-card-body">
                                Você ecõnomiza e prioriza o que realmente é importante
                            </div>
                            <button className="home-card-button">Ver Detalhes</button>
                        </div>

                        <div className="home-card" style={{ width: "18rem" }}>
                            <div className="home-card-icon">   <BiBarChartAlt /></div>
                            <h3 className="home-card-title">sustentável</h3>
                            <div className="home-card-body">
                                Energia limpa e renovável
                            </div>
                            <button className="home-card-button">Ver Detalhes</button>
                        </div>

                        <div className="home-card" style={{ width: "18rem" }}>
                            <div className="home-card-icon">  <FaHandshake /></div>
                            <h3 className="home-card-title">Confiável</h3>
                            <div className="home-card-body">
                                Mais de 3 anos e 2000 clientes satisfeitos
                            </div>
                            <button className="home-card-button">Ver Detalhes</button>
                        </div>



                        <section class="section-content">
                            <div class="section-text">
                                <h1 class="section-title">Nosso Compromisso com a Sustentabilidade</h1>
                                <h2 class="section-subtitle">Pequenas ações, grandes impactos</h2>
                                <p class="section-description">
                                    Descubra como estamos fazendo a diferença com práticas que priorizam o meio ambiente. Junte-se a nós nesta jornada em direção a um futuro mais sustentável.
                                </p>
                            </div>
                            <div class="section-form">
                                <Form />
                                {/*  <form>
                                    <label for="name">Nome:</label>
                                    <input type="text" id="name" name="name" class="form-input" />
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" class="form-input" />
                                    <button type="submit" class="form-button">Enviar</button>
                                </form> */}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;