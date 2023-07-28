import React from "react";
import parallax2 from "../css/parallax2.css"
import Bounce from 'react-reveal/Bounce';


const Parallax2 = () => {
  return (
    <section id="novedades" className="ancla">
  <div className="container-fluid">
    <div className="row">
      <div className="col p-0 card">
        
          <div className="parallax2"></div>
          <div className="card-img-overlay text-center text-parall">
            
            <h2 className="titulopa2">
           ¡Viví la experiencia!
            </h2>
            <h2 className="titulopa3">El recuerdo que hagamos hoy será tu sonrisa de mañana</h2>
                       
            <Bounce left>
            <button type="button" className="btn  btn-card  mt-3 btn-parall ">
              
            <a className=" text-center" href="/paquetes"><b>Ver paquetes disponibles</b> </a>
            </button>
            </Bounce>
             
          </div>
        
      </div>
    </div>
  </div>
</section>
  )
}


export default Parallax2
