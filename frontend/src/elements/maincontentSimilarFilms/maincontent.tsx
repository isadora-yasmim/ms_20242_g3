import React from "react";
import Title from "./title/title";
import Description from "./description/description";
import SearchBar from "./searchbar/searchbar";
import RandomFilmsButton from "./buttons/randomfilmsButton/randomfilmsButton";
import FilteredFilmsButton from "./buttons/filteredfilmsButton/filteredfilmsButton";

function Maincontent() {
    return (
      <div className="Maincontent">
       <Title/>
       <SearchBar/>
       <Description/>
       <RandomFilmsButton/>
       <FilteredFilmsButton/>
      </div>
    );
  }
  
  export default Maincontent;