import React from "react";
import logoi from "../assets/logoi.png";

import uno from "../assets/uno.jpg";
import dos from "../assets/dos.jpg";
import tres from "../assets/tres.jpg";
import cuatro from "../assets/cuatro.jpg";
import cinco from "../assets/cinco.jpg";
import seis from "../assets/seis.jpg";
import footer from "../css/footer.css";

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div className="container  d-flex ">
          <div className="row conteinerFooter">
            <div className=" col-md-6 col-lg-3">
              <div>
                <h3 className="pt-3">Sígueme </h3>
                <a href="https://www.instagram.com/hokee.fotografiademascotas/" Target="_blank"> <img src={logoi} className="imgLogo footer-social" alt="..." /></a>
                
              </div>
            </div>
             <div class="col-md-6 col-lg-3">
              <div class="footer-project">
               
                <a href="https://www.instagram.com/hokee.fotografiademascotas/" Target="_blank" >
                <img src={uno} className="imgCuadro" alt="..." />
                </a>
                <a href="https://www.instagram.com/hokee.fotografiademascotas/" Target="_blank">
                <img src={dos} className="imgCuadro" alt="..." />
                </a>
                <a href="https://www.instagram.com/hokee.fotografiademascotas/" Target="_blank">
                <img src={tres} className="imgCuadro" alt="..." />
                </a>
                <a href="https://www.instagram.com/hokee.fotografiademascotas/" Target="_blank">
                <img src={cuatro} className="imgCuadro" alt="..." />
                </a>
                <a href="https://www.instagram.com/hokee.fotografiademascotas/" Target="_blank">
                <img src={cinco} className="imgCuadro" alt="..." />
                </a>
                <a href="https://www.instagram.com/hokee.fotografiademascotas/" Target="_blank">
                <img src={seis} className="imgCuadro" alt="..." />
                </a>
              </div>
            </div>
          
          </div>
        </div>
        <div className="container footer-text col-md-6 col-lg-6">
          <p>
          © Copyright 2023 HOKEE - PET PHOTOGRAPY - TODOS LOS DERECHOS RESERVADOS - BY LAURA ORTIZ - Contacto: hokeepetphoto@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
