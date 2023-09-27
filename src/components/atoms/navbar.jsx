import { useContext } from "react";
import logo from "../../assets/images/Logo.png"
import "../../assets/styles/Navbar.css"
import navbarContexts from "../../contexts/navbarContexts";
import { useNavigate } from "react-router-dom";
 
 function navbar() {

    const {isNavbar, setIsNavbar } = useContext(navbarContexts);
    const navigate = useNavigate();


    const handleclick = (e) => {
        navigate("/");
        setIsNavbar(false)
      }
    
    
    return (
        <>
        {isNavbar ? (
            <>
        <div className='navbar-container'>
          <div className='navbar-return'>  
            <button class="button" type='submit' onClick={handleclick}>
              <div class="button-box">
                <span class="button-elem">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
                <span class="button-elem">
                  <svg viewBox="0 0 46 40">
                    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"></path>
                  </svg>
                </span>
              </div>
            </button>
          </div>
          <img src={logo} alt="Logo" />
          </div>

            </>)
            :(<>
          <div className='navbar-container'>
                    <img src={logo} alt="Logo" />
            </div>
                </>)}
        </>
        
     );
 }
 
 export default navbar;