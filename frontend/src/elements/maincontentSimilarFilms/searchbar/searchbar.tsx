import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./searchbar.css";

const SearchBar = () => {
    const [searchText, setSearchText] = useState(""); // Estado para armazenar o texto

    // Função para lidar com mudanças no campo de texto
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value); // Atualiza o estado com o texto digitado
    };

    // Função para enviar o POST à API e receber a resposta
    const sendSearchRequest = async (query: string) => {
        if (!query.trim()) return; // Não busca se a string estiver vazia

        try {
            const response = await fetch("https://randomgosling.onrender.com/search/1", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            });

            if (!response.ok) {
                throw new Error("Erro ao buscar filmes");
            }

            const data = await response.json();
            console.log(data); // A resposta da API é exibida no console

        } catch (error) {
            console.error("Erro ao enviar a busca:", error);
        }
    };

    // Efeito para enviar o POST sempre que o texto muda
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            sendSearchRequest(searchText);
        }, 500); // Aguarda 500ms para evitar requisições excessivas

        return () => clearTimeout(delayDebounce); // Limpa o timeout se o texto mudar rapidamente
    }, [searchText]);

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Busque por um filme..."
                className="search-input"
                value={searchText}
                onChange={handleInputChange}
            />
            <Link to="/procurando-similares">
                <FaSearch className="search-icon" />
            </Link>
        </div>
    );
};

export default SearchBar;
