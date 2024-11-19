import React from "react";
import TitleFilter from "./Titlefilter/titlefilter";
import DescriptionFilter from "./Descriptionfilter/descriptionfilter";
import RandomFilmsButtonFilter from "./ButtonsFilter/randomfilmsButtonFilter/randomfilmsButton";
import SimilarFilmsButtonFilter from "./ButtonsFilter/similarfilmsButtonFilter/similarfilmsButton";
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
       <TitleFilter/>
       <DescriptionFilter/>
       <FiltrosFilmes  onFilter={handleFilter} />
       <RandomFilmsButtonFilter/>
       <SimilarFilmsButtonFilter/>
      </div>
    );
  }
  
  export default MaincontentFilter;