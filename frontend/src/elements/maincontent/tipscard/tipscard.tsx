import React, { useState, useEffect } from "react";
import "./tipscard.css";

const url = "https://randomgosling.onrender.com/filmes/1";
const options = {
    method: 'GET',
};

// Interface para definir o tipo esperado dos itens em data
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

    useEffect(() => {
        async function loadData() {
            const data = await fetchData();
            const newPosteres = data.slice(0, 20).map((item: MovieData) => "https://image.tmdb.org/t/p/w500" + item.poster);
            setPosteres(newPosteres);
        }

        loadData();
    }, []);

    return (
        <div className="tips">
            {posteres.map((poster, index) => (
                <img key={index} src={poster} alt={`Poster ${index + 1}`} className="Poster" />
            ))}
        </div>
    );
}

function Tipscard() {
    return (
        <div className="tipscard">
            <div className="tipscardButton">Top Filmes da Semana</div>
                <Movies />
        </div>
    );
}

export default Tipscard;