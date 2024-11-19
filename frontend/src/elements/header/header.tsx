import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/homepage" className="linkheader">
      <div className="logoKlimax">Klimax</div>
      </Link>
    </div>
  );
}

export default Header;
