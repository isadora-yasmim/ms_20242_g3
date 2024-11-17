import React from "react";
import "./randomfilmsButton.css";

function RandomFilmsButton() {
  return (
    <div className="randomfilmsButton">
        <div className="imagemdefundo"> 
            <img
                src="https://i.ibb.co/7GtKkQs/aleatorio-icon.png"
                alt="Filmes Aleatórios"
                className="logoaleatorio"
            />
        </div>
    </div>
  );
}

export default RandomFilmsButton;