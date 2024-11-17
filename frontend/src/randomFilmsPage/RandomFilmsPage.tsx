import React from "react";
import Header from "../elements/header/header";
import Footer from "../elements/footer/footer";
import Main from "../elements/maincontent/main";
import "./randomFilmsPage.css";
import FilteredFilmsButton from "../components/maincontent/buttons/filteredfilmsButton/filteredfilmsButton";
import RandomFilmsButton from "../components/maincontent/buttons/randomfilmsButton/randomfilmsButton";
import SimilarFilmsButton from "../elements/maincontent/buttons/similarfilmsButton/similarfilmsButton";

function RandomFilmsPage() {
    const simboloUrl =
    "https://i.ibb.co/7GtKkQs/aleatorio-icon.png";

    return (
      <div className="container">
        <header className="header">KlimaX</header>
        <main className="main-content">
          <h1 className="title">Recomendação Aleatória</h1>
          <img src={simboloUrl} alt="Símbolo" className="symbol-image" />
          <p className="description">
            Sem ideias do que assistir? Aperte o botão e deixe a escolha com a
            gente!
          </p>
          <button
            className="random-button"
            onClick={() => alert("Botão de Recomendação Aleatória clicado!")}
          >
            Recomendação Aleatória
          </button>
        </main>
        <footer className="footer">
          <FilteredFilmsButton/>
          <SimilarFilmsButton/>
          
        </footer>
      </div>
    )

}

export default RandomFilmsPage;