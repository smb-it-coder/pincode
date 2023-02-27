import React, { useState, useReducer, Fragment, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useParams, useNavigate } from 'react-router-dom';
import getCityByState from '../../Services/state.service';
import * as __CONSTA from '../../Services/consta';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';




function CityState() {
const [districts , setDistricts] = useState([]);
    let { state } = useParams();
    const stateName = (state.replaceAll(/PINCODE-/ig, "")).replaceAll(/-/ig, " ");
    localStorage.setItem('state', stateName);
   
    const removeEntity = (item) =>{
        if(localStorage.getItem(item)){
            localStorage.removeItem(item);
        } else {
            return false;
        }
        return true;
    }
    
    removeEntity('district');
   
    console.log('CityState => localStorage', localStorage);

    
   function transform (name) { 
      let str = name.replaceAll(/ /ig, "-"); 
    return   str.toLowerCase();
}  

    useEffect(
        () => {
            async function fetchData() {
                const cityOption = await getCityByState(stateName);
                setDistricts(cityOption.data);
            }

            fetchData();

        },
        []);
   
  
///console.log('districts', districts);
    return (
        <Fragment>
            <Helmet>
                <title>    PinCode {stateName}, {stateName} Post Office Search My pincode | {__CONSTA.NAMESPACE} </title>
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
                                <Breadcrumb.Item active> {stateName} </Breadcrumb.Item>
                            </Breadcrumb>
                            <hr />
                        </div>
                        <h1>{stateName} Pincode</h1>
                        <div className="row">&nbsp;</div>

                        <div className="row">
                        <div className="col-sm-10">
                            <strong>
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                        Pincode of state {stateName} is tebular below. To expand it to select it.
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
                                            <th>District</th>
                                            <th>State</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {districts.map((city) => (
                                            <tr key={city.district} >
                                                
                                                
                                                <td>&nbsp; <a className="text-decoration-none" href={`/pincode-${transform(city.district)}-city`}>
                                                   {city.district}
                                                    </a>
                                                    </td>
          



                                                <td>&nbsp;
                                                    {stateName}
                                                </td>


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

export default CityState;