import React, { useEffect } from 'react'
import Validation from '../features/validation/components/Validation'
import { useDispatch, useSelector } from 'react-redux'
import { getAllValidation } from "../features/validation/validationSlice";
import {dumpGetValidation} from '../features/validation/validationApi'





function ValidationPage() {
    const dispatch = useDispatch();
    const isLogin=useSelector((state)=>state.auth.isLogin);
    const updateData=useSelector((state)=>state.validation.updateData);
  
    useEffect(() => {
        dispatch(getAllValidation(isLogin));

    }, [])
    useEffect(()=>{
      if(updateData) {
        dumpGetValidation(isLogin);
      }
    },[updateData])
    const validationData = useSelector((state) => state.validation.validationData);


    return (
        <div className="wrapper">
            <Validation validationData={validationData} />

        </div>
    )
}

export function ValidationDescription() {
    return (
      <div className="validationDesc alert alert-warning alert-dismissible fade show" role="alert">
        <div className="wrapper">
          <h3>Salesforce Switch</h3>
          <div className="popup">
            Use the Off/On switches and the Enable All/Disable All buttons to specify what you want to activate and deactivate for your Org. Once ready, click Deploy to apply the changes to your Org. Deployment times will vary depending on the number of changes you are making. Triggers tend to take longer than Validation Rules and Workflows (especially for Production Orgs, as all Apex Tests must run on deployment).
            You can click on the component names to have a look at what the components are made up of and Enable/Disable.
          </div>
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    );
  }
  

export default ValidationPage