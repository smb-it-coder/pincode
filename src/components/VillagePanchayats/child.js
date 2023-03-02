import React, { useState, useReducer, Fragment, useEffect } from 'react';
import { Helmet } from "react-helmet";
//import Helmet, { HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import * as __CONSTA from '../../Services/consta';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
//import other from '../../Services/similarContent.service';
import getPincodeByLocation from '../../Services/pincodeByLocation.service';

function ChildComponent() {

const [similarcontent , setSimilarcontent] = useState([]);
const params = useParams();
const area = params.area;
const location = area ? ((area.replace(/pincode/g, "")).replaceAll(/-/ig, " ")).replace(/ s o/g, ""):'';

  const childName = localStorage.getItem("childName");
  const place = childName? childName.split(" "):'';
  const district = localStorage.getItem("district");
  const stateName = localStorage.getItem("state");
  const childEntity = JSON.parse(localStorage.getItem("row")) ?JSON.parse(localStorage.getItem("row")) :[];

    useEffect( () => {
            async function similarDataFetch() {
                let localArea = place?place[0]:location
                let pincodeData = await getPincodeByLocation(localArea);
                setSimilarcontent(pincodeData.data);
            }
            similarDataFetch();
        },
        []);
   
  
    return (
        <Fragment>
            <Helmet>
                <title>{childEntity.village}  Pin Code - {childEntity.village} , {childEntity.district} Post Office Area PIN Codes | {__CONSTA.NAMESPACE} </title>
                <meta name="description" content={`Find ${childEntity.village}  Pin Codes and ${childEntity.village} Near by Area PIN Codes. Search all pin codes of ${childEntity.village} location, ${childEntity.district}.`} />
                Keywords: 
                <meta name="keywords" content={`${childEntity.village} PIN Code, ${childEntity.village}   zip code,  ${childEntity.village}  postal code, ${childEntity.district} PIN Code, ${childEntity.state} PIN Code, ${childEntity.village}   area pin code, search my pincode`}  />
                <link href="https://url.com" rel="canonical" />
                <meta http-equiv="Content-Language" content="English" />           
            </Helmet>
            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                        <h1>{childName} Pincode {childEntity.pincode}</h1>
                        <div className="row">
                            <p>{childName} Pin Code is {childEntity.pincode}. Pin Code or Zip Code is also known as Postal Code.
                                {childName} is located in district {childEntity.district},  {childEntity.state} in india.
                                Following are the details of {childName}pin code:</p></div>
                        <div className="row">&nbsp;</div>

                        <div className="row">
                        <div className="col-sm-12">
                        <h2>Details of post office {childEntity.village} : </h2>
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                       <strong> {childEntity.pincode} ( {childEntity.office} ) </strong>
                                    </Alert>
                                ))}
                            
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
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                        <h2>Similar post offices with {childEntity.village} ({childEntity.pincode} ) pin code:</h2>
                                    </Alert>
                                ))}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            
                                            <th>Pincode</th>
                                            <th>Place</th>
                                            <th>Subdistrict</th>
                                            <th>District</th>
                                            <th>state</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {similarcontent.map((similar) => (
                                            <tr key={similar.id} >
                                                <td>&nbsp; {similar.pincode} </td>
                                                <td>&nbsp; {similar.village} ,<strong>{similar.office}</strong> </td>
                                                <td>&nbsp; {similar.subdistrict?similar.subdistrict:'NA'} </td>
                                                <td>&nbsp; {similar.district} </td>
                                                <td>&nbsp; {similar.state} </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="row">&nbsp;</div>
                        

                        <div className="row">
                            <h2>{childEntity.village} ({childEntity.office} )  Pin Code or Postal Code FAQ</h2>
                            <h3>Q: What is {childEntity.village}&nbsp;{childEntity.office} Pincode in {childEntity.state}?</h3>
                            <p>Ans: {childEntity.village} ({childEntity.office} ) Pin Code is {childEntity.pincode}. {childEntity.office} is located in district {childEntity.district} in {childEntity.state} , India.</p>
                            <h3>Q: What is the current address of {childEntity.village} ({childEntity.office} )  Post Office, {childEntity.state}?</h3>
                            <p>Ans: {childEntity.village} ({childEntity.office} )  Post Office is located at {childEntity.district}, {childEntity.state}, at pincode {childEntity.pincode}. {childEntity.subdistrict} Post Office is a Sub Post Office of {childEntity.district}. </p>
                            <h3>Q: Pin code number {childEntity.pincode} is for which area?</h3>
                            <p>Ans: Pincode {childEntity.pincode} is for {childEntity.village} ({childEntity.office} ) . It is located in {childEntity.district}.</p>

                          <p>&nbsp;</p>
                        </div>


                        <div className="row">&nbsp;</div>

                    </div>

                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                </div>
                <div className="row">&nbsp;</div>
            </div>
        </Fragment>
    );
}

export default ChildComponent;