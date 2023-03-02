
import React , { Fragment } from "react";
import { useParams } from 'react-router-dom';
function Sbreadcrum() {
 // const state = localStorage.getItem("state");
  const params = useParams();
  const state =  (params.state.replaceAll(/-Pincode/ig, "")).replaceAll(/-/ig, " ");
  return (
    <>
    <div className="container-fluid bg-info mb-5" >
      <div className="d-flex flex-column align-items-center justify-content-center" style={{'min-height': 100 + 'px'}} >
        <h3 className="display-3 font-weight-bold text-white">Location Pincode</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0"><a class="text-white" href="/">Home</a></p>
          <p className="m-0 px-2">/</p>
          <p className="m-0">{state}</p>
        </div>
      </div>
      </div>
      </>
  );
}

export default Sbreadcrum;