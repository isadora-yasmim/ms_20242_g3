import React from "react";
import "./similarfilmsButton.css";
import { Link } from "react-router-dom";

function SimilarFilmsButtonFilter() {
  return (
    <Link to="/filmes-similares">
    <div className="similarfilmsButton">
        <div className="imagemdefundo2">
            <img
                src="https://i.ibb.co/k0C2H34/Basedfilms-icon.png"
                alt="Filmes Filtrados"
                className="logofiltros"
            />
        </div>
    </div>
    </Link>
  );
}

export default SimilarFilmsButtonFilter;