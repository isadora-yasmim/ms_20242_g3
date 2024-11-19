import React from "react";
import { Link } from "react-router-dom";
import "./randomFilmsPage.css";
import FilteredFilmsButton from "../components/maincontent/buttons/filteredfilmsButton/filteredfilmsButton";
import SimilarFilmsButton from "../elements/maincontent/buttons/similarfilmsButton/similarfilmsButton";

function RecomendaçãoAleatória() {
  const simboloUrl = "https://i.ibb.co/7GtKkQs/aleatorio-icon.png";

  return (
    <div className="container">
      <header className="header">KlimaX</header>
      <main className="main-content">
        <h1 className="title">Recomendação Aleatória</h1>
        <img src={simboloUrl} alt="Símbolo" className="symbol-image" />
        <p className="description">
          Sem ideias do que assistir? Aperte o botão e deixe a escolha com a gente!
        </p>
        {/* O Link deve envolver o botão */}
        <Link to="/randomFilmsPage3">
          <button
            className="random-button"
          >
            Recomendação Aleatória
          </button>
        </Link>
      </main>
      <footer className="footer">
        <FilteredFilmsButton />
        <SimilarFilmsButton />
      </footer>
      
      <div className="bottombar">
      <div className="copyright">
        <p>&copy; 2024 Klimax. Todos os direitos reservados.</p>
      </div>
    </div>
    </div>
  );
}

export default RecomendaçãoAleatória;