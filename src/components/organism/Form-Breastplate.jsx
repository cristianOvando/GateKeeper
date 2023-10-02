import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarSec from '../atoms/navbarsec';
import '../../assets/styles/FormBreastPlate.css';
import { activarContenedor, desactivarContenedor } from '../../animation/main.js';

function FormBreastPlate() {

  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    // Utiliza las funciones importadas para activar/desactivar el contenedor
    if (showLogin) {
      activarContenedor();
    } else {
      desactivarContenedor();
    }
    setShowLogin(!showLogin);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (showLogin) {
      console.log('Iniciando sesión');
    } else {
      console.log('Registrando');
    }
  };

  return (
  <>
  <NavbarSec/>
    <div className="container">
      <div className="box">
        <div className={`form ${showLogin ? 'sign_in' : 'sign_up'}`}>
          <h3>{showLogin ? 'Login' : 'Register'}</h3>
          {showLogin ? (
            <span>¡Bienvenido a breastplate!</span>
          ) : (
            <span>¡Se parte de breastplate!</span>
          )}
          <form action="#" onSubmit={handleSubmit}>
            {showLogin ? (
              <>
              <div className='Login-container'>
                <div className="typeL">
                  <input type="email" placeholder="Gmail" name="" id="email" />
                </div>
                <div className="typeL">
                  <input type="password" placeholder="Password" name="" id="password" />
                </div>
                <div className="forgot">
                  <span>¿Olvidaste tu contraseña?</span>
                </div>
              </div>
              </>
            ) : (
              <>
              <div className='Register-container'>
                <div className="type">
                  <input type="text" name="" placeholder="Name" id="name" />
                </div>
                <div className="type">
                <input type="text" name="" placeholder="Apellido" id="lasname" />
                </div>
                <div className="type">
                <input type="text" name="" placeholder="username" id="name" />
                </div>
                <div className="type">
                <input type="text" name="" placeholder="Edad" id="name" />  
                </div>
                <div className="type">
                <input type="text" name="" placeholder="Estatura" id="name" />
                </div>
                <div className="type">
                <input type="text" name="" placeholder="Peso" id="name" />
                </div>
                <div className="type">
                  <input type="email" name="" placeholder="Email" id="email" />
                </div>
                <div className="type">
                  <input type="password" name="" placeholder="Password" id="password" />
                </div>
              </div>
              </>
            )}

            <button className="btn bkg" type="submit">
              {showLogin ? 'Iniciar sesión' : 'Registrarse'}
            </button>
          </form>
        </div>
      </div>

      <div className="overlay">
        <div className={`page ${showLogin ? 'page_signIn' : 'page_signUp'}`}>
          {showLogin ? (
            <h3>¡Bienvenido de nuevo!</h3>
          ) : (
            <h3>¡Listo para ser parte de breastplate!</h3>
          )}
          {showLogin ? (
            <p>Ingresa tus datos para poder iniciar sesión en breastplate</p>
          ) : (
            <p>Ingresa tus datos para ser parate de breastplate</p>
          )}

          <button className="btn" onClick={toggleForm}>
            {showLogin ? 'Register' : 'Login'}
            {showLogin ? (
              <i className="bi bi-arrow-right"></i>
            ) : (
              <i className="bi bi-arrow-left"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  </>
  );
}

export default FormBreastPlate;
