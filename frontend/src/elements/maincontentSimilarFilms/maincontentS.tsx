import React from "react";
import Titles from "./titles/titles";
import SearchBar from "./searchbar/searchbar";
import RandomFilmsButton from "./buttons/randomfilmsButton/randomfilmsButton";
import FilteredFilmsButton from "./buttons/filteredfilmsButton/filteredfilmsButton";
import SearchedFilms from "./searchedfilms/searchedfilms";

function MaincontentS() {
    return (
      <div className="MaincontentS">
       <Titles/>
       <SearchBar/>
       <SearchedFilms title={""} genre={""} year={""} image={""}/>
       <RandomFilmsButton/>
       <FilteredFilmsButton/>
      </div>
    );
  }
  
  export default MaincontentS;