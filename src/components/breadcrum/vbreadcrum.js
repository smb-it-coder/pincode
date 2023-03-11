
import React , { Fragment } from "react";
import { useParams } from 'react-router-dom';
function Vbreadcrum() {
  const state = localStorage.getItem("state");
  const district = localStorage.getItem("district");
 // if(district){
    const districtLink = district ? ((district).replaceAll(/pincode/ig, "")).replaceAll(/-/ig, " ") :'';
 // }
  const params = useParams();
  //if(params.area){
    const area = params.area ? ((params.area).replaceAll(/pincode/ig, "")).replaceAll(/-/ig, " ") :'';
  //}

  const transform =  (name) => { 
       let str = name.replaceAll(/ /ig, "-"); 
     return   str.toLowerCase();
 }  
  

 const stLink =  transform(state);

  return (
    <>
    <div className="container-fluid bg-info mb-5" >
      <div className="d-flex flex-column align-items-center justify-content-center" style={{'min-height': 100 + 'px'}} >
        <h3 className="display-3 font-weight-bold text-white">Location Pincode</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0"><a class="text-white" href="/">Home</a></p>
          <p className="m-0 px-2">/</p>
          <p className="m-0"><a class="text-white" href={`/state/${state?state.replaceAll(/ /ig, "-"):''}-Pincode`}>{state}</a></p>
          <p className="m-0 px-2">/</p>
          <p className="m-0"><a class="text-white" href={`/${stLink}/${districtLink?districtLink.replaceAll(/ /ig, "-"):''}-pincode`}>{district}</a></p>
          <p className="m-0 px-2">/</p>
          <p className="m-0">{area}</p>
        </div>
      </div>
      </div>
      </>
  );
}

export default Vbreadcrum;