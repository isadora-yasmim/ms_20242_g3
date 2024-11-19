import React from "react";
import Title from "./Title/title";
import DescriptionFilter from "./Description/description";
import RandomFilmsButton from "./Buttons/randomfilmsButton/randomfilmsButton";
import SimilarFilmsButton from "./Buttons/similarfilmsButton/similarfilmsButton";

function MaincontentFilter() {
    return (
      <div className="Maincontent">
       <Title/>
       <DescriptionFilter/>
       <RandomFilmsButton/>
       <SimilarFilmsButton/>
      </div>
    );
  }
  
  export default MaincontentFilter;