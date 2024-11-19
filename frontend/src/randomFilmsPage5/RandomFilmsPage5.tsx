import React, { useEffect } from "react";
import "./randomFilmsPage5.css";
import {useNavigate } from "react-router-dom";

function RandomFilmsPage5() {
  const simboloUrl = "https://i.ibb.co/7GtKkQs/aleatorio-icon.png";
  const navigate = useNavigate();
  

  useEffect(() => {
    // Redireciona automaticamente para randomFilmsPage4 após 3 segundos
    const randomInt = Math.floor(Math.random() * 2);
    const timer = setTimeout(() => {
      navigate("/randomFilmsPage6/"+randomInt);
    }, 4000); // Tempo em milissegundos (4 segundos)

    
    // Limpa o timer caso o componente seja desmontado
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="randomFilmsPage5-container">
      <header className="randomFilmsPage5-header">KlimaX</header>
      <main className="randomFilmsPage5-main-content">
        <h1 className="randomFilmsPage5-title">Recomendação Aleatória</h1>
        <img src={simboloUrl} alt="Símbolo" className="randomFilmsPage5-symbol-image" />
        <p className="randomFilmsPage5-description">
        Explorando novas opções... Quase lá! <br />
        </p>
        {/* Botão manual */}
          <button
            className="randomFilmsPage5-random-button" disabled
          > 
            Recomendando...
          </button>
        <div className="randomFilmsPage5-loading-spinner"></div>
      </main>

      <div className="bottombar">
      <div className="copyright">
        <p>&copy; 2024 Klimax. Todos os direitos reservados.</p>
      </div>
    </div>
    </div>
    
  );
}

export default RandomFilmsPage5;
