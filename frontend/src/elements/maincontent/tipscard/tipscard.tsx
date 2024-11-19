import React, { useState, useEffect } from "react";
import "./tipscard.css";

const url = "https://randomgosling.onrender.com/filmes/1";
const options = {
  method: 'GET',
};

interface MovieData {
  poster: string;
}

async function fetchData(): Promise<MovieData[]> {
  try {
    let response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
}

function Movies() {
  const [posteres, setPosteres] = useState<string[]>([]);
  const tipsRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      const newPosteres = data.slice(0, 16).map((item: MovieData) => "https://image.tmdb.org/t/p/w500" + item.poster);
      setPosteres(newPosteres);
    }

    loadData();
  }, []);

  const handleAnterior = () => {
    tipsRef.current!.scrollLeft -= 10000;
  };

  const handleProximo = () => {
    tipsRef.current!.scrollLeft += 10000;
  };

  return (
    <div className="tipscard">
      <div className="tipscardButton">Tops da Semana</div>
      <button className="botao-anterior" onClick={handleAnterior}>
      <img
        src="https://i.ibb.co/djmD8dS/right-arrow.png"
        alt="Semelhante aos filmes selecionados"
        className="prox"
      />
      </button>
      <div ref={tipsRef} className="tips">
        {posteres.map((poster, index) => (
          <img key={index} src={poster} alt={`Poster ${index + 1}`} className="Poster" />
        ))}
      </div>
      <button className="botao-proximo" onClick={handleProximo}>
      <img
        src="https://i.ibb.co/djmD8dS/right-arrow.png"
        alt="Semelhante aos filmes selecionados"
        className="prox"
      />
      </button>
    </div>
  );
}

export default Movies;
