import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";


function ProtectedRoutes({children}) {
  const isLogin=useSelector((state)=>state.auth.isLogin);
  if(isLogin) {
    return(
    <>
    {children}
    </>
    )

  }
  else{
    return(
    <Navigate to="/" replace={true} />
    )

  }
  
}

export default ProtectedRoutes