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
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
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
    <h2>Filter Movies</h2>
    <div className="filtro-section">
      <h3>Genres</h3>
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
      <h3>Runtime</h3>
      <input
        type="number"
        min="1"
        value={minRuntime}
        onChange={(e) => setMinRuntime(Number(e.target.value))}
      />
    </div>
  
    <div className="filtro-section">
      <h3>Include Adult Content</h3>
      <label>
        <input
          type="checkbox"
          checked={includeAdult}
          onChange={(e) => setIncludeAdult(e.target.checked)}
        />
        Include Adult
      </label>
    </div>
    <button onClick={handleFilter}>Filter</button>
  </div>  
  );
};

export default FiltrosFilmes;
