import React from "react";
import "./titles.css";

function Titles() {
  return (
    <div className="titles">
      <img
        src="https://i.ibb.co/k0C2H34/Basedfilms-icon.png"
        alt="Filmes Similares"
        className="logos"
      />
      <div className="tituloSimilars">
          <p className="conteudos">Recomendação por filmes similares</p>
      </div>
    </div>
  );
}

export default Titles;