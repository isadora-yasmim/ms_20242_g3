import React, { useState } from "react";
import Header from "../elements/header/header";
import Footer from "../elements/footer/footer";
import Titles from "../elements/maincontentSimilarFilms/titles/titles";
import  RecomendationCard from "../elements/maincontentSimilarFilms/recomendationcard/recomendationcard"
import "./similarFilmspage.css";

// Página de carregamento

function SimilarFinalRecomendation() {
    return (
      <div>
        <Header />
        <Titles />
        < RecomendationCard/>
        <Footer />
      </div>
    );
 }

export default SimilarFinalRecomendation;