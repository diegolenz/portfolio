import React, { Component } from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

class Footer extends Component {
  render() {
    return (
      /*  <footer className="page-footer blue "> 
 
     <div className=" text-center ">© 2020 Copyright:
         <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
     </div>
 
 </footer> */

      <footer className="bg-dark text-light py-4">
        <div className="container">
          {/* Nome do site */}
          <h4 className="text-uppercase text-center mb-3">Instaladore Lenz</h4>
          {/* Frase de efeito */}
          <p className="text-center mb-4">Levando energia sustentável para sua casa</p>

          {/* Informações de contato */}
          <div className="row text-center">
            <div className="col-md-4 mb-3">
            <CiLocationOn />Centro, Itaipulândia - Paraná
            </div>
            <div className="col-md-4 mb-3">
            <FaPhone /> (45) 3559-1154
            </div>
            <div className="col-md-4 mb-3">
              
              <FaWhatsapp />
               (55) 45 99977-1678
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer