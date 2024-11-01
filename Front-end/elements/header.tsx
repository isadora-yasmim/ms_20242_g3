import React from "react";
import "./header.css";

const Klimax: React.FC = () => {
  return <div className="klimax">KlimaX</div>;
};

const Cabecalho: React.FC = () => {
  return (
    <div className="cabecalho">
      <Klimax />
    </div>
  );
};

export default Cabecalho;
