import React, { useState, useReducer, Fragment, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
//import { Link, useParams, useNavigate } from 'react-router-dom';

import * as __CONSTA from '../../Services/consta';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
//import districtsPincode from '../../Services/districts.service';
import other from '../../Services/similarContent.service';


function ChildComponent() {
//const [child , setChild] = useState([]);
const [similarcontent , setSimilarcontent] = useState([]);
  
  const childId = localStorage.getItem("childId");
  const childName = localStorage.getItem("childName");
  const place =  childName.split(" ");
  const district = localStorage.getItem("district");
  const stateName = localStorage.getItem("state");
  const childEntity = JSON.parse(localStorage.getItem("row")) ;
  

  console.log(childEntity);

   ///alert('hi');
 // console.log('child',localStorage);

    useEffect( () => {
            async function similarDataFetch() {
                let pincodeData = await other(stateName, district, place[0]);
                setSimilarcontent(pincodeData.data);
            }
            similarDataFetch();
        },
        []);
   
  
//console.log('similarContent', similarcontent);
    return (
        <Fragment>
            <Helmet>
                <title>    Indian Postal code {childName}: {district}  , {stateName} Post Office Search My pincode | {__CONSTA.NAMESPACE} </title>
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
                                <Breadcrumb.Item active> {childName} </Breadcrumb.Item>
                            </Breadcrumb>
                            <hr />
                        </div>
                        <h1>{childName} Pincode</h1>
                        <div className="row">&nbsp;</div>

                        <div className="row">
                        <div className="col-sm-12">
                            <strong>
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                       {childEntity.pincode} ( {childEntity.office} )
                                    </Alert>
                                ))}
                            </strong>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-12">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Place</th>
                                            <th>Pincode</th>
                                            <th>office</th>
                                            <th>Subdistrict</th>
                                            <th>District</th>
                                            <th>state</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={childEntity.id} >
                                            <td>{childEntity.village}   </td>
                                            <td>&nbsp; {childEntity.pincode} </td>
                                            <td>&nbsp; <strong>{childEntity.office}</strong> </td>
                                            <td>&nbsp; {childEntity.subdistrict ? childEntity.subdistrict : 'NA'} </td>
                                            <td>&nbsp; {childEntity.district} </td>
                                            <td>&nbsp; {childEntity.state} </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>

                        <div className="row">
                        <div className="col-sm-12">
                            <strong>
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                       Nearby location  pincodes :-  
                                    </Alert>
                                ))}
                            </strong>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Place</th>
                                            <th>Pincode</th>
                                            <th>office</th>
                                            <th>Subdistrict</th>
                                            <th>District</th>
                                            <th>state</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {similarcontent.map((similar) => (
                                            <tr key={similar.id} >
                                                <td>{similar.village} ,  </td>
                                                <td>&nbsp; {similar.pincode} </td>
                                                <td>&nbsp; <strong>{similar.office}</strong> </td>
                                                <td>&nbsp; {similar.subdistrict?similar.subdistrict:'NA'} </td>
                                                <td>&nbsp; {similar.district} </td>
                                                <td>&nbsp; {similar.state} </td>
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

export default ChildComponent;