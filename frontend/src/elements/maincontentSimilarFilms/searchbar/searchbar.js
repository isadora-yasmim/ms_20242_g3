import React, { useState } from "react"; // Importa useState
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
      <img src="https://th.bing.com/th?id=OIP.J-NC5zdHendWhPtlgsY0LgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="lupa" className="search-icon" onClick={handleSearch} /> {/* Ícone clicável */}
    </div>
  );
};

export default SearchBar;
