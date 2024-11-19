import React, { useState } from "react";
import "./filtro.css"

interface Genre {
  id: number;
  name: string;
}

interface FilterProps {
  onFilter: (filterData: {
    with_genres: string;
    "with_runtime.gte": number;
    include_adult: boolean;
  }) => void;
}

const genres: Genre[] = [
  { id: 28, name: "Ação" },
  { id: 12, name: "Aventura" },
  { id: 16, name: "Animação" },
  { id: 35, name: "Comédia" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentário" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Família" },
  { id: 14, name: "Fantasia" },
  { id: 36, name: "História" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Musical" },
  { id: 9648, name: "Místerio" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Ficção científica" },
  { id: 10770, name: "Filmes de televisão" },
  { id: 53, name: "Suspense" },
  { id: 10752, name: "Guerra" },
  { id: 37, name: "Velho Oeste" },
];

const FiltrosFilmes: React.FC<FilterProps> = ({ onFilter }) => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [minRuntime, setMinRuntime] = useState<number>(1);
  const [includeAdult, setIncludeAdult] = useState<boolean>(false);

  const handleGenreChange = (id: number) => {
    setSelectedGenres((prev) =>
      prev.includes(id) ? prev.filter((genre) => genre !== id) : [...prev, id]
    );
  };

  const handleFilter = () => {
    const filterData = {
      with_genres: selectedGenres.join(","),
      "with_runtime.gte": minRuntime,
      include_adult: includeAdult,
    };
    onFilter(filterData);
  };

  return (
    <div className="filtro-container">
    <h2>Filtrar Filmes</h2>
    <div className="filtro-section">
      <h3>Gênero</h3>
      <div>
        {genres.map((genre) => (
          <label key={genre.id}>
            <input
              type="checkbox"
              value={genre.id}
              checked={selectedGenres.includes(genre.id)}
              onChange={() => handleGenreChange(genre.id)}
            />
            {genre.name}
          </label>
        ))}
      </div>
    </div>
  
    <div className="filtro-section">
      <h3>Duração</h3>
      <input
        type="number"
        min="1"
        value={minRuntime}
        onChange={(e) => setMinRuntime(Number(e.target.value))}
      />
    </div>
  
    <div className="filtro-section">
      <h3>Incluir conteúdo adulto</h3>
      <label>
        <input
          type="checkbox"
          checked={includeAdult}
          onChange={(e) => setIncludeAdult(e.target.checked)}
        />
        Incluir conteúdo adulto
      </label>
    </div>
    <button onClick={handleFilter}>Filtrar</button>
  </div>  
  );
};

export default FiltrosFilmes;
