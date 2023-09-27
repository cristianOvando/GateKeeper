import { useNavigate } from 'react-router-dom';
import {React, useContext} from 'react';
import Navbar from '../atoms/navbar'
import exercise from "../../assets/images/Exercise.png";
import watch from "../../assets/images/Watch.png";
import pulse from "../../assets/images/Pulse.png";
import steps from "../../assets/images/Steps.png"
import calories from "../../assets/images/Calories.png";
import down from "../../assets/images/DoubleDown.png"
import breastplate from "../../assets/images/breastplate.png"
import "../../assets/styles/BreastplateProject.css"

function projectBreastplate() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/FormBreastplate");
  }

  const handleScrollDown = (e) => {
    e.preventDefault();
    const nextSection = document.querySelector('.div-specs-container');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    const handleclick = (e) => {
        navigate("/");
        setIsNavbar(false)
      }
    

  
    return ( 
      <>
        <Navbar/>
            <div className='div-text-container'>
              <p>Datos <span class="resaltado">vitales</span></p><p>ahora mas cerca de ti</p>
              <div><button className='btn-login'  onClick={handleSubmit}>Iniciar sesión</button></div>
            </div>
              <div className='div-specs-container'>
                <div className='div-speed'>
                  <img src={exercise} alt="specs1"/>
                  <h4>Velocidad</h4>
                  <p>Capaz de medir la distancia mandando datos en tiempo real donde se mostraran la distancia recorrida con tiempo.</p>
                </div>
                <div className='div-distance'>
                  <img src={watch} alt="specs2"/>
                  <h4>Distancia Recorrida</h4>
                  <p>Medicion de tiempo de acuero a la distancia recorrida, esto te servira para ver cuanto tiempo tu condicion o activación fisica dura.</p>
                </div>
                <div className='div-rm'>
                  <img src={pulse} alt="specs3"/>
                  <h4>Ritmo Cardiaco</h4>
                  <p>Una herramienta agil, dandole a nuestros usuarios la seguridad de poder medir su ritmo cardiaco de acuerdo a sus metas.</p>
                </div>
                <div className='div-steps'>
                  <img src={steps} alt="specs4"/>
                  <h4>Pasos totales</h4>
                  <p>A traves del movimiento de nuestros usuarios y su altura, conoceremos y se guardaran junto con la distancia recorrida.</p>
                </div>
                <div className='div-calories'>
                  <img src={calories} alt="specs5"/>
                  <h4>Calorias</h4>
                  <p>Junto a todo el conjunto de datos nos serviran para decirle a nuestro usuario cuantas kilocalorias perdio durante su proceso.</p>
                </div>
              </div>
              <div className='down-container'>
                <img
                  className='btn-scroll'
                  src={down}
                  alt='Texto alternativo de la imagen'
                  onClick={handleScrollDown}
                />
              </div>
              <div className='div-product'>
                  <div>
                    <img src={breastplate} alt="breastplate"/>
                  </div>
                    <div className='text-container'>
                      <h1>
                      Breastplate
                      </h1>
                        <p className='price-container'>
                        $1,999
                        </p>
                        <p className=''>
                        El mejor equipo para ti
                        </p>
                    </div>
                    <div>
                      <button className='btn-shop' type="submit" onClick={handleSubmit}>
                        Comprar ahora
                      </button>
                     </div>
              </div>
              <div className='experience'>
                <p>La voz de la experiencia</p>
                <div className='experience-container'>
                  <div className='user-container'>
                    <img/>
                    <h5>Martin Ochoa</h5>
                  </div>
                  <div className='user-container'>
                   <img/>
                    <h5>Diego Pereyra</h5>
                    <p></p>
                  </div>
                  <div className='user-container'>
                    <img/>
                    <h5>Aldo Paca</h5>
                    <p></p>
                  </div>
                </div>
              </div>
          </>
     );
}

export default projectBreastplate;