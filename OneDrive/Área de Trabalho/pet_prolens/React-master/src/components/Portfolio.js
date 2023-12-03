import "../styles/portfolio.css";
import React, { useEffect, useState } from "react";
import CatApiService from "../services/CatApiService";

const Portfolio = () => {
  const [imagensPequenas, setImagensPequenas] = useState([]);
  const [imagensGrandes, setImagensGrandes] = useState([]);

  useEffect(() => {
    CatApiService.fetchData()
      .then((data) => {
        if (data.filter((imagem) => imagem.static === true)) {
          const imagensPequenasFiltradas = data.filter(
            (imagem) => imagem.height <= imagem.width
          );
          const imagensGrandesFiltradas = data.filter(
            (imagem) => imagem.height >= imagem.width
          );

          setImagensPequenas(imagensPequenasFiltradas);
          setImagensGrandes(imagensGrandesFiltradas);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div id="main-container">
      {imagensPequenas.map((imagem, index) => (
        <div className="small-images-container">
          <img
            key={index}
            src={imagem.url}
            alt={`Imagem ${index}`}
            className="render-small-image"
          />
        </div>
      ))}

      {imagensGrandes.map((imagem, index) => (
        <div className="big-images-container">
          <img
            key={index}
            src={imagem.url}
            alt={`Imagem ${imagem.name}`}
            className="render-big-image"
          />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
