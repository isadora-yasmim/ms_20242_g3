import React from "react";
import "./randomFilmsPage6.css";
import SimilarFilmsButton from "../elements/maincontent/buttons/similarfilmsButton/similarfilmsButton";
import FilteredFilmsButton from "../components/maincontent/buttons/filteredfilmsButton/filteredfilmsButton";
import { Link, useParams} from "react-router-dom";

function RandomFilmsPage6() {
  const simboloUrl = "https://i.ibb.co/7GtKkQs/aleatorio-icon.png";
  const films = [
    {title: "ExemploFilme1", description:"DescriçãoFime1" },
    {title: "ExemploFilme2", description:"DescriçãoFime2" }
  ]

  const { FilmId } = useParams();
  const filmIndex = parseInt(FilmId as string, 10);
  const currentFilm = films[ filmIndex ]
  return (
    <div className="randomFilmsPage6-container">
      <header className="randomFilmsPage6-header">KlimaX</header>
      <main className="randomFilmsPage6-main-content">
        <h1 className="randomFilmsPage6-title">Recomendação Aleatória</h1>
        <img src={simboloUrl} alt="Símbolo" className="randomFilmsPage6-symbol-image" />
        <p className="randomFilmsPage6-description">
        Esse é o filme que encontramos para você! 
        </p>
        <div className="randomFilmsPage6-movie-card">
      <div className="randomFilmsPage6-movie-card-content">
        <h2 className="randomFilmsPage6-movie-title">{currentFilm.title}</h2>
        <p className="randomFilmsPage6-movie-description">
          {currentFilm.description}
        </p>
        <div className="randomFilmsPage6-movie-details">
          <span className="randomFilmsPage6-movie-genre">Gênero</span>
          <span className="randomFilmsPage6-movie-year">Ano</span>
          <span className="randomFilmsPage6-movie-duration">Duração</span>
        </div>
      </div>
      <img
        className="randomFilmsPage6-movie-poster"
        src="https://via.placeholder.com/150" // Substitua com o link do poster real
        alt="Poster de John Wick"
      />
    </div>
      </main>
      {/* O Link deve envolver o botão */}
      <Link to="/randomFilmsPage5">
      <button className="randomFilmsPage6-random-button">
          Recomendar Outro...
        </button>
        </Link>
        
      <footer className="randomFilmsPage6-footer">
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

export default RandomFilmsPage6;