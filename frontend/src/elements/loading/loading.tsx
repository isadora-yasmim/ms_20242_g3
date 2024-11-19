import "./loading.css";
import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";


function Loading() {
    const navigate = useNavigate();
  
    useEffect(() => {
       //Redireciona automaticamente para randomFilmsPage4 após 3 segundos
      const timer = setTimeout(() => {
        navigate("/recomendacao-similares/");
      }, 2000); // Tempo em milissegundos (2 segundos)
  
      // Limpa o timer caso o componente seja desmontado
      return () => clearTimeout(timer);
   }, [navigate]);
  
    return (
        <div className="geraloading">
            <p className="mensagemloading" > 
              Estamos buscando o melhor filme para você...
            </p>
            <div className="loading"></div>
        </div>
    );
}

export default Loading;