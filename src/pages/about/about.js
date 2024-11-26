import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './../../assets/walppaper-ia.jpeg'

function AboutPage() {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '960px' }}>
        {/* Título */}
        <h2 className="text-center text-secondary mb-4" style={{ fontWeight: 'bold' }}>
          Sobre a Instaladore Lenz
        </h2>
        
        {/* Conteúdo principal */}
        <div className="row align-items-center">
          {/* Imagem */}
          <div className="col-md-5">
            <img src={img} 
              alt="Energia Solar"
              className="img-fluid rounded"
              style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            />
          </div>
          
          {/* Texto */}
          <div className="col-md-7">
            <p 
              className="text-justify" 
              style={{ 
                lineHeight: '1.6', 
                fontSize: '1rem', 
                widgetsSpacing: '20px 20px' 
              }}
            >
              A <strong>Instaladore Lenz</strong> é uma empresa comprometida com a sustentabilidade e inovação, 
              especializada em soluções de energia solar. Nosso objetivo é proporcionar eficiência energética, 
              reduzir custos e contribuir para um futuro mais limpo e sustentável. 
              <br /><br />
              Localizada em Itaipulândia - Paraná, somos pioneiros na instalação de sistemas fotovoltaicos na região, 
              com um time altamente capacitado para atender às suas necessidades. Confie na Instaladore Lenz para levar 
              energia renovável até sua casa ou empresa!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
