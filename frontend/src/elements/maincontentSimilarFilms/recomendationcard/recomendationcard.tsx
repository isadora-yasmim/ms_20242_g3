import React from "react";
import "./recomendationcard.css";

function RecomendationCard() {
  return (
    <div className="recomendation">
      <p className="mensagemrecomendacao">Este é o filme que escolhemos para você!</p>
      <div className="recomendationcard"></div>
    </div>
  );
}

export default RecomendationCard;