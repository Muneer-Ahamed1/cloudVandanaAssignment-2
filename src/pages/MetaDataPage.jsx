import React, { useEffect, useState } from 'react';
import { ValidationDescription } from './ValidationPage';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import decodeUriComponent from 'decode-uri-component';
import {logIn,logOut} from "../features/auth/AuthSlice";
function MetaDataPage() {
  const dispatch = useDispatch();
  let routerData=window.location.href;
  const loginData=useSelector((state)=>state.auth.isLogin);
  

  useEffect(() => {
    routerData=routerData.replace("#","?");
    const url=new URL(routerData);
    const token = url.searchParams.get('access_token');
    const instance_url = decodeUriComponent(url.searchParams.get('instance_url'));
    dispatch(logIn({token,instance_url}));
  }, [routerData])

if(!loginData) {
return 
}

  return (
    <div className="MetaData">
      <div className="wrapper d-flex gap-3 p-2">
        <Link className='btn btn-primary metatdata btn-sm' to={"/validationPage"}>Get MetaData</Link>
        <button className='btn btn-danger logout btn-sm ' onClick={()=>{
        dispatch(logOut())
        location.reload();
        location.href="/";
        history.replaceState(null, null, location.href);     
      }
        }>Logout</button>
      </div>
    </div>
  );
}

export default MetaDataPage;
