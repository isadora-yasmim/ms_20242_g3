import React from "react";

import Filteredfilms from "./filteredfilms/filteredfilms";
import Randomfilms from "./randomfilms/randomfilms";
import { Link } from 'react-router-dom';
import Similarfilms from "./similarfilms/similarfilms";

function Functionscards() {
  return (
    <div>
      <Link to="/random_films">
        <Randomfilms/>
      </Link>
      <Filteredfilms />
      <Similarfilms />
    </div>
  );
}

export default Functionscards;
