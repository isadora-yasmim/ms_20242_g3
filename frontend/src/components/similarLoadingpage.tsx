import React, { useState } from "react";
import Header from "../elements/header/header";
import Footer from "../elements/footer/footer";
import Titles from "../elements/maincontentSimilarFilms/titles/titles";
import Loading from "../elements/loading/loading";
import "./similarFilmspage.css";

// Página de carregamento

function SimilarLoadingPage() {
    return (
      <div>
        <Header />
        <Titles />
        <Loading />
        <Footer />
      </div>
    );
 }

export default SimilarLoadingPage;