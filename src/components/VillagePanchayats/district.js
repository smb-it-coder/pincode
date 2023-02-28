import React, { useState, useReducer, Fragment, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
//import { Link, useParams, useNavigate } from 'react-router-dom';
import districtsPincode from '../../Services/districts.service';
import * as __CONSTA from '../../Services/consta';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

function DistrictState() {
const [locations , setLocations] = useState([]);
   
  const getDistrict = (value) => {
          return  value.replaceAll(/ city/ig, "");
   }

   const District = localStorage.getItem("district");

   console.log(' level 3=> localStorage', localStorage);

   function transform (name) { 
      let str = name.replaceAll(/ /ig, "-"); 
      let str1 = str.replace(/[^a-zA-Z0-9]/g, '-');
      let city = str1 + '-pincode';
      
    return   (city.toLowerCase()).replaceAll(/--/ig, "-");
 }  

 function setEntity (id, childName, row) { 
    localStorage.setItem('childId', id);
    localStorage.setItem('childName', childName);
    rowData(row);
    //console.log(' level 31 => localStorage', localStorage);
}  

const rowData = (row) => {
    localStorage.setItem('row', JSON.stringify(row));
}



    useEffect(
        () => {
            async function fetchData() {
                let state = localStorage.getItem("state");
                const pincodeData = await districtsPincode(state, getDistrict(District));
                setLocations(pincodeData.data);
            }

            fetchData();

        },
        []);
   
  
///console.log('districts', districts);
    return (
        <Fragment>
            <Helmet>
                <title>    PinCode {District}, {District} Post Office Search My pincode | {__CONSTA.NAMESPACE} </title>
            </Helmet>
            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active> {District} </Breadcrumb.Item>
                            </Breadcrumb>
                            <hr />
                        </div>
                        <h1>{District} Pincode</h1>
                        <div className="row">&nbsp;</div>

                        <div className="row">
                            <div className="col-sm-10">
                                <strong>
                                    {['warning'].map((variant) => (
                                        <Alert key={variant} variant={variant}>
                                            Pincode of District {District} is tebular below. To expand it to select it.
                                        </Alert>
                                    ))}
                                </strong>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-sm-10">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Location</th>
                                            <th>Pincode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {locations.map((area) => (
                                            <tr key={area.id} >
                                                <td>&nbsp; <a class="text-decoration-none"
                                                 href={`/${transform(area.village + '-' + area.office)}`}
                                                
                                                 onClick={() => setEntity(area.id, area.village, area)}
                                                
                                                
                                                >{area.village} ,  {area.office}</a> </td>
                                                <td>&nbsp; {area.pincode} </td>
                                            </tr>
                                        ))
                                        }

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default DistrictState;