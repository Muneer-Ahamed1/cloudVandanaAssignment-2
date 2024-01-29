import React, { useEffect, useState } from 'react';
import { logOut } from '../../auth/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { patchByIdValidationSlice } from '../validationSlice';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../pages/Loading';

function Validation({ validationData }) {
  const [validation, setValidation] = useState(null);
  const [dump, setDump] = useState([]);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const loadingData = useSelector((state) => state.validation.loader.loading);
  const [prev, setPrev] = useState([]);
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (validationData && validationData.records) {
      setValidation(validationData.records);
    }
  }, [validationData]);

  useEffect(() => {
    if (filter === 'enable') {
      const updatedValidation = validation.map((vl) => ({
        ...vl,
        Active: true,
      }));
      setDump(updatedValidation.map((vl) => ({
        ...vl,
        Active: false,
      })));
      setValidation(updatedValidation);
    }
    if (filter === 'disable') {
      const updatedValidation = validation.map((vl) => ({
        ...vl,
        Active: false,
      }));
      setDump(updatedValidation.map((vl) => ({
        ...vl,
        Active: true,
      })));
      setValidation(updatedValidation);
    }
  }, [filter]);

  const deployBtn = () => {
    if (dump.length === 0) {
      toast.warn("Nothing to deploy")
    } else {
      dispatch(
        patchByIdValidationSlice({
          data: dump,
          isLogin: isLogin,
        })
      );
      setDump([]);
    }
  };

  const rollbackBtn = () => {
    const updatedValidation = validation.map((vl) => {
      const prevItem = prev.find((item) => item.Id === vl.Id);
      return prevItem ? { ...vl, Active: prevItem.Active } : vl;
    });
    setValidation(updatedValidation);
  };

  if (loadingData) {
    return <Loading></Loading>
  }
  if (validationData && validationData?.records?.length == 0) {
    return <p className=' text-center'>{"No Volidation Data"} </p>

  }
  return (
    <div className="Validation-Rules container">
      <h3 className="display-4">Validation Rules</h3>
      <div className="row align-items-center">
        <div className="col-md-6 mb-2">
          <button className='btn btn-danger logout btn-sm ' onClick={() => {
            dispatch(logOut())
            location.reload();
            history.replaceState(null, null, location.href);


          }
          }>Logout</button>
        </div>
        <div className="col-md-6 mb-2">
          <button className="btn btn-success btn-lg btn-block md:btn-lg btn-sm" onClick={deployBtn}>
            Deploy Changes
          </button>
        </div>
        <div className="col-md-6">
          <select
            name="filtery"
            id="filtery"
            className="form-control md:form-select form-select-sm"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option disabled selected>
              Filter
            </option>
            <option value="enable">Enable</option>
            <option value="disable">Disable</option>
          </select>
        </div>
      </div>

      <div className="row mt-3">
        {validationData &&
          validation &&
          validationData?.records.map((vl, index) => {
            const { ValidationName, Id, Active } = vl;
            const { url } = vl.attributes;

            return (
              <div className="col-md-6 mb-3" key={Id} id={Id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{ValidationName}</h5>
                    <p className="card-text">{vl?.EntityDefinition?.DeveloperName}</p>
                    <div className="form-check form-switch deploy-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id={`flexSwitchCheckChecked-${index}`}
                        checked={validation[index].Active}
                        onChange={(e) => {
                          let indexOf = dump.findIndex((item) => item.Id === validation[index].Id);
                          if (indexOf === -1) {
                            dump.push(validation[index]);
                            setDump([...dump]);
                          } else {
                            dump.splice(indexOf, 1);
                            setDump([...dump]);
                          }

                          const dummy = { ...validation[index], Active: e.target.checked };
                          setValidation([...validation.slice(0, index), dummy, ...validation.slice(index + 1)]);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Validation;
