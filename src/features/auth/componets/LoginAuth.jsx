import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
function LoginAuth() {
    const dispatch=useDispatch();
    const [loginUrl,setLoginUrl]=useState("login");
    const clickMe=()=>{
      window.location.href=`https://${loginUrl}.salesforce.com/services/oauth2/authorize?client_id=${"3MVG9pRzvMkjMb6l1H0ThA6FCQDW2RgF0FCrfTZ17wTBzuiG6KunbHl7XlmxqXlQhx2MNxonBr2mgzVcW.E9M"}&redirect_uri=${"https://salesforceassignment-2.netlify.app/metaDataPage"}&response_type=token`

    }
  return (
    <div className="wrapper login d-flex gap-3 ">
      <select name="login" id="login" onChange={(e)=>setLoginUrl(e.target.value)} className='form-control  ' style={{fontSize:"0.8rem"}}>
        <option value="login" defaultChecked>
          Production
        </option>
        <option value="test">
          Sandbox
        </option>
      </select>

<button className=' btn btn-primary btn-sm' onClick={()=>clickMe()}>Login</button>

    </div>
  )
}

export default LoginAuth