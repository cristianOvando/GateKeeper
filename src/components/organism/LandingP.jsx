import { useNavigate } from 'react-router-dom';
import "../../assets/styles/LandingPage.css";
import logo from "../../assets/images/Logo.png"
import Bell from "../../assets/images/Bell.png"

function PaginaPrincipal() {
    const navigate = useNavigate()
    
    const handlerClickLogin = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    return ( 
        <>
            <div className='div-landing-content'>
                    <div className='container'>
                        <div className='Logo'>
                            <img className="imgL" src={logo}></img>
                            <h2>GateKeeper</h2>
                        </div>
                            <button type="button" className="iniciarSesion" onClick={handlerClickLogin}>INICIAR SESION</button>
                            <div className='noti'>
                                <img className="imgN" src={Bell}/>
                                <p>Todo al alcance de tus manos</p>
                            </div>
                    </div>
            </div>
        </>
     );
}

export default PaginaPrincipal;