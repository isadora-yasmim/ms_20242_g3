import React, { useState } from "react";
import Header from "../elements/header/header";
import Footer from "../elements/footer/footer";
import Title from "../elements/maincontentSimilarFilms/title/title";
import "./similarFilmspage.css";

// Página de carregamento

function SimilarLoadingPage() {
    return (
      <div>
        <Header />
        <Title />
        <div className="texto">
          <div className="buffer"></div> {/* Representa o buffer */}
          <p>Estamos buscando o melhor filme para você</p>
        </div>
        <Footer />
      </div>
    );
 }

export default SimilarLoadingPage;