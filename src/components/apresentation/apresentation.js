import React, { useEffect, useState } from 'react';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import './apresentation.scss'; // Arquivo CSS para estilização e animação

function EconomySection() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true); // Renderiza o texto após a animação do título
    }, 1000); // Duração da animação do título
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="economy-section">
      {/* Título animado */}
      <h2 className="economy-title">
        Quer economizar com sua fatura de energia?
      </h2>

      {/* Texto exibido após o título */}
      {showText && (
        <p className="economy-text">
          Faça um orçamento agora com a <span className="highlight">Economiza Sul</span>
        </p>
      )}
    </div>
  );
}

export default EconomySection;
