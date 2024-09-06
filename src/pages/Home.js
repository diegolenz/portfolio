import React, { Component } from 'react'
import background from '../assets/background.jpg'
import '../css/home.scss'
import perfil from '../assets/perfil-nb.png'
import Form from '../pages/form.js'
import logoMnu from './../assets/logo-sem-fundo.png'


class Home extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className="home" >

                {/*  <div className="photo">
                    <img src={perfil} alt="" />
                </div> */}
             {/*    <div id="rightImage" className="animated jackInTheBox introduction" /> */}
                    <table id="top_part" className="pag">
                        <thead />
                        <tbody>
                            <tr>
                                <td style={{ width: 65 + '%' }}>
                                    <div className='card-text'>
                                        <div className='row'>
                                            <a className="navbar-brand" href="#">
                                                <img src={logoMnu} alt="Logo" width="430" height="262" className="d-inline-block align-text-top" />
                                            </a>
                                        </div>
                                        <h2 className="subtitulo">Iluminando o futuro com energia sustentável e limpa.</h2>
                                        <h2 className="subtitulo">Fale com um dos nossos vendedores atravez do WhatsApp</h2>
                                        <div className="form-group">
                                            <a href="https://wa.me/5545998273844" className="whatsapp-btn">
                                                <i className="fab fa-whatsapp"></i>
                                                Contate-nos no WhatsApp
                                            </a>
                                            {/* <button type="submit" className="btn btn-primary btn-block"> WhatsApp </button> */}
                                        </div>
                                    </div>
                                </td>

                                <td className='aling-right'>
                                    <Form />
                                </td>
                            </tr>

                        </tbody>
                    </table>



                    {/*    <span className='title'>Olá, eu sou Diego</span>
                    <p className='subtitle'>Desenvolvedor de software</p>
                    <p className='text'>Seja bem vindo ao meu portifólio</p>
                    <button className='button button-default'>Baixar Curriculo</button> */}
                    {/* <button className='button'>Veja mais sobre meu projeto</button> */}
                {/* </div> */}
            </div>
        )
    }
}
export default Home;