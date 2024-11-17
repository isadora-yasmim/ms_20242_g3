import React, { useState } from "react"; // Importa useState
import { FaSearch } from "react-icons/fa"; // Importa o ícone de lupa
import "./searchbar.css"; // Importa o CSS

const SearchBar = () => {
  const [searchText, setSearchText] = useState(""); // Estado para armazenar o texto

  // Função para lidar com mudanças no campo de texto
  const handleInputChange = (e) => {
    setSearchText(e.target.value); // Atualiza o estado com o texto digitado
  };

  // Função para lidar com a submissão
  const handleSearch = () => {
    alert(`Você está buscando por: "${searchText}"`); // Apenas exemplo de ação
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Busque por um filme..." // Placeholder no campo de texto
        className="search-input"
        value={searchText} // O valor do campo vem do estado
        onChange={handleInputChange} // Atualiza o estado ao digitar
      />
      <FaSearch className="search-icon" onClick={handleSearch} /> {/* Ícone clicável */}
    </div>
  );
};

export default SearchBar;
