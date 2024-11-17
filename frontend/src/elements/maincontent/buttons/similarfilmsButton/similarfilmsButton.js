import React from "react";
import "./similarfilmsButton.css";

function SimilarFilmsButton() {
  return (
    <div className="similarfilmsButton">
        <div className="imagemdefundo"> 
            <img
                src="https://i.ibb.co/k0C2H34/Basedfilms-icon.png"
                alt="Filmes Similares"
                className="logoasimilar"
            />
        </div>
    </div>
  );
}

export default SimilarFilmsButton;