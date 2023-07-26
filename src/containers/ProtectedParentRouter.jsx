import { Outlet, Navigate } from "react-router-dom";

function ProtectedParentRouter ({loginData}) {
    return(
        loginData ?  <Navigate to={"/Login"}/> : <Outlet/>   
    )
}

export default ProtectedParentRouter;