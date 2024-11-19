import React from "react";
import Title from "./Title/title";
import DescriptionFilter from "./Description/description";
import RandomFilmsButton from "./Buttons/randomfilmsButton/randomfilmsButton";
import SimilarFilmsButton from "./Buttons/similarfilmsButton/similarfilmsButton";
import FiltrosFilmes from "./FiltrosPaste/filtro"

const MaincontentFilter: React.FC = () => {
  // Defina a função handleFilter no escopo do componente
  const handleFilter = (filterData: {
    with_genres: string;
    "with_runtime.gte": number;
    include_adult: boolean;
  }) => {
    console.log("Filter Data:", filterData);
    // Aqui você pode implementar a lógica de filtro
  };
    return (
      <div className="Maincontent">
       <Title/>
       <DescriptionFilter/>
       <FiltrosFilmes  onFilter={handleFilter} />
       <RandomFilmsButton/>
       <SimilarFilmsButton/>
      </div>
    );
  }
  
  export default MaincontentFilter;