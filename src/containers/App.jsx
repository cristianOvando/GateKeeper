import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Login from '../pages/Login';
import LandingPage from '../pages/landingPage';
import Notifications from "../components/organism/Notifications";
import UserContext from "../context/UserContext";
import ProtectedParentRouter from './ProtectedParentRouter';
import NotisContext from '../context/NotisContext';
import AlertaContext from "../context/AlertaContext";


function App() {

  const [loginData, setLoginData] = useState(false);
  const [notis, setNotis] = useState([]);
  const [alerta, setAlerta] = useState([]);

  return (
    <BrowserRouter>
    <UserContext.Provider value={{loginData, setLoginData}}>
    <NotisContext.Provider value={{notis, setNotis}}>
    <AlertaContext.Provider value={{alerta, setAlerta}}>
        <Routes>
              <Route>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Login" element={<Login />} />
                <Route element={<ProtectedParentRouter loginData={loginData}/>}>
                <Route path="/Notifications" element={<Notifications />} />
                </Route>
              </Route>
        </Routes>
    </AlertaContext.Provider>
    </NotisContext.Provider>
    </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
