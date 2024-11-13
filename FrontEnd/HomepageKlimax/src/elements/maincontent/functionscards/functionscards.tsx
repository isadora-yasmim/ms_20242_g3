import React from "react";
import Similarfilms from "./similarfilms/similarfilms";
import Filteredfilms from "./filteredfilms/filteredfilms";
import Randomfilms from "./randomfilms/randomfilms";

function Functionscards() {
  return (
    <div>
      <Randomfilms />
      <Filteredfilms />
      <Similarfilms />
    </div>
  );
}

export default Functionscards;
