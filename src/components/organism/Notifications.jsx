import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alertas from "../atoms/Alertas";
import logo from '../../assets/images/Logo.png';
import UserContext from '../../context/UserContext';
import "../../assets/styles/Notification.css";


function Notifications() {

  const [alerta, setAlerta] = useState([]);
  const {loginData, setLoginDatasetIsLoged} = useContext(UserContext);
  const navigate = useNavigate();

  const handlerClick = (e) => {
    e.preventDefault();
    window.location.reload();
  }


  useEffect(() =>{
    const Alertas = async () => {
        try{
            const url = `http://54.159.74.140:2002/Alerta`;
            const response = await fetch(url);

            console.log("response: ", response);
            if(!response.ok){
                console.log("error en el fetch");
            }

            const data = await response.json();
            console.log("=========", data.data.alert)
            setAlerta(data.data.alert)
    
        }catch(error){
            console.log("error: ", error);
        }   
}
    Alertas();
  }, [])
   
    return (
        <>
            <div className="Header">
                <div className="Container-Logo"><img className="logo" src={logo}/></div>
            </div>
            <div className='containerHistorial'>
            <h2>Historial</h2>
             <button className='buttonHistorial' onClick={handlerClick}>Actualizar Historial</button>
            </div>
                <table border="1" className='tableHistorialNoti'>
                    <td className='trNotis'>
                        <tbody>
                        <tr className='trTitulo'><h1 className='titulo'>Tipo</h1></tr>
                    {alerta.map((alerts => 
                        <>
                        {console.log("esto es el alerts: ", alerts)}
                        <tr className='respuestaUno'>
                            <Alertas 

                                tipo={alerts.tipo}
                            />   
                        </tr>
                        </>))}
                        </tbody>
                        </td>
                    <td className='segundoCuerpo'>
                        <tbody className='tbody'>
                        <tr className='trTitulo'><h1 className='titulo'>Descripcion</h1></tr>
                    {alerta.map((alerts => 
                        <>
                        {console.log("esto es el alerts: ", alerts)}
                        <tr className='respuestaDos'>
                            <Alertas descripcion={alerts.descripcion}/>   
                        </tr>
                        </>))}
                        </tbody>
                    </td>
                </table>
        </>
    );
}

export default Notifications;