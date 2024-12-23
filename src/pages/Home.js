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
            <div class="background">
                <nav class="navbar">
                    <ul>
                        <li><a href="#">Orçamento</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
                <div class="cards-container">
                    {/* <div class="card">Card 1</div>
                    <div class="card">Card 2</div>
                    <div class="card">Card 3</div> */}
                    <div className="home-card" style={{ width: "18rem" }}>
                        <div className="home-card-header">
                            <GiReceiveMoney />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">Ecônomia</h5>
                            <p className="card-text"> Você ecõnomiza e prioriza o que realmente é importante</p>
                        </div>
                    </div>


                    <div className="home-card" style={{ width: "18rem" }}>
                        <div className="card-header">
                            <BiBarChartAlt />
                        </div>
                        <div className="home-card-body">
                            <h5 className="card-title">sustentável</h5>
                            <p className="card-text">Energia limpa e renovável</p>

                        </div>
                    </div>
                    <div className="home-card" style={{ width: "18rem" }}>
                        <div className="home-card-header">
                            <FaHandshake />
                        </div>
                        <div className="home-card-body">
                            <h5 className="card-title">Confiável</h5>
                            <p className="card-text">Mais de 3 anos e 2000 clientes satisfeitos</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;