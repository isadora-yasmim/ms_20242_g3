// MovieCard.tsx
import React from "react";
import "./searchedfilms.css";
import { Link } from "react-router-dom";

// Define os tipos das propriedades (props)
interface SearchedFilmsProps {
  title: string;
  genre: string;
  year: string;
  image: string;
}

const SearchedFilms: React.FC<SearchedFilmsProps> = ({ title, genre, year, image }) => {
  return (
    <div className="movie-cards">
        <Link to="/carregando-similares">
        <div className="movie-card1">
            <img src={image} alt={title} className="movie-card1-image" />
            <div className="movie-card1-content">
                <h3 className="movie-card1-title">{title}</h3>
                <p className="movie-card1-genre">{genre}</p>
                <p className="movie-card1-year">{year}</p>
            </div>
        </div>
        </Link>

        <Link to="/carregando-similares">
        <div className="movie-card2">
            <img src={image} alt={title} className="movie-card2-image" />
            <div className="movie-card2-content">
                <h3 className="movie-card2-title">{title}</h3>
                <p className="movie-card2-genre">{genre}</p>
                <p className="movie-card2-year">{year}</p>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchedFilms;
