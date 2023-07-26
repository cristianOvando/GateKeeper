import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png"
import Swal from 'sweetalert2'
import "../../assets/styles/Login.css";

function FormLogin() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });

  const handleInput = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loginData.username === "Ali" && loginData.password === "10564"){
      console.log("bienvenido: ", loginData.username, loginData.password);
      navigate("/Notifications")
    } else {
      Swal.fire({
        text: "Usuario o contraseña incorrectos"
      })
    }
  };

  return (
    <>
      <div className="containers-padre">
        <div className="container-hijo">
          <div className="Div-form"> 
            <div className="LogoContainer">
              <img className="logo" src={logo}/>
            </div>
            <form onSubmit={handleSubmit}>
                    <div className="mb-3 usuario">
                      <label className="form-label">username</label>
                      <input type="text" name="username" id="user"  
                      value={loginData.username}
                      onChange={handleInput}/>
                    </div>
                    <div className="mb-3 password">
                      <label className="form-label">password</label>
                      <input type="password" name="password" className="pass"
                      value={loginData.password}
                      onChange={handleInput}/>
                    </div>
            </form>
                    <button type="submit" className="boton-login" onClick={handleSubmit}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormLogin;