import React, { useState } from "react";
import Header from "../elements/header/header";
import Footer from "../elements/footer/footer";
import "./similarFilmspage.css";
import MaincontentS from "../elements/maincontentSimilarFilms/maincontentS";

// Página de carregamento

function SimilarSearchingPage() {
    return (
      <div className="geral">
        <Header />
        <MaincontentS/>
        <Footer />
      </div>
    );
 }

export default SimilarSearchingPage;