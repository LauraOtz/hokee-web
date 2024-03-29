import React from "react";
import experiencias from "../css/experiencias.css";
import olie from "../assets/experiencias/olie.jpg";
import huma from "../assets/experiencias/huma.jpg";
import otti_gato from "../assets/experiencias/otti_gato.jpg";
import { Bounce } from "react-awesome-reveal";

const PreguntasFrecuentes = () => {
  return (
    <>
      < Bounce>
        <h1 className="Titulop pt-5 px-2" id="Experiencias">
          <b>Sus Palabras </b>
        </h1>
      </ Bounce>
      < Bounce>
        <h2 className="Titulop pb-3 tituloP2">
          <b>¡Gracias! ¡Siempre gracias!</b>{" "}
        </h2>
      </ Bounce>
      

      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4 pt-3">
            <img src={huma} className="img-fluid imgExp" alt="perro salchicha con vestido" />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx ">
              <h5 className="card-title mb-3">
                <b>Irene y Humahuaca</b>
              </h5>
              <p className="card-text textE ">
                “Laurita muero de amor con cada una de las fotos! No puedo
                sacarme la sonrisa de la boca! Te juro que captaste a la Huma
                que es ella en cada una de las fotos! Y es para siempre! Me voy
                a abrazarla!!! Bello bello bello todo!!!
              </p>
              <span className="text-dark">
                San Miguel de Tucumán - Argentina - 2020
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrp" />
      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4 pt-3">
            <img src={olie} className="img-fluid  imgExp " alt="perro pequeño" />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx">
              <h5 className="card-title mb-3 ">
                <b> Gini Rohmer Litzmann</b>
              </h5>
              <p className="card-text textE">
                “Tremendas las fotos!!!! Estoy enamorada!!! Gracias! Hace años
                quería sacarles fotos así a mis pequeños, gracias por cumplir mi
                sueño!"
              </p>
              <span className="text-dark">
                San Miguel de Tucumán - Argentina - 2020
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="hrp" />
      <div className="cardE mb-3">
        <div className="row g-0">
          <div className="col-md-4 pt-3">
            <img src={otti_gato} className="img-fluid imgExp" alt="gato en fondo negro" />
          </div>
          <div className="col-md-8">
            <div className="card-body cardEx pb-5">
              <h5 className="card-title mb-3 ">
                <b> Silvia y Otti</b>
              </h5>
              <p className="card-text textE ">
                “Lau recién termino de trabajar y estoy viendo las fotos, unas
                ganas de llorar. Sus ojos en todas las fotos! lo amo tanto!
                Gracias!!”
              </p>
              <span className="text-dark">
                San Miguel de Tucumán - Argentina - 2022
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="hrp" /> */}
    </>
  );
};

export default PreguntasFrecuentes;
