import React, { useState, useReducer, Fragment, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link, useParams, useNavigate } from 'react-router-dom';

import * as __CONSTA from '../../Services/consta';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import getCityByState from '../../Services/state.service';
import row from '../../Services/rowContent.service';

function CityState() {

    const [districts , setDistricts] = useState([]);
    const [isloder , setIsloder] = useState([true]);
   // setIsloder(true);
    let { state } = useParams();
    const stateName = (state.replaceAll(/-Pincode/ig, "")).replaceAll(/-/ig, " ");
    localStorage.setItem('state', stateName);
   
    const removeEntity = (item) =>{
        if(localStorage.getItem(item)){
            localStorage.removeItem(item);
        } else {
            return false;
        }
        return true;
    }
   // alert('hi city');
    removeEntity('district');
    removeEntity('childId');
    removeEntity('childName');
    removeEntity('row');

    const  setEntity  = (entity) => { 
        localStorage.setItem('district', entity);
    } ;
    
    console.log(' level 1 => localStorage', localStorage);

    
   function transform (name) { 
   // alert(name);
      let str = name.replaceAll(/ /ig, "-"); 
    return   str.toLowerCase();
}  

    useEffect(
        () => {
            async function fetchData() {
                let stateAnd =   stateName.replaceAll(/ and /ig, " & ");
                const cityOption = await getCityByState(stateAnd);
                setDistricts(cityOption.data);
                setIsloder(false);
               
                if((cityOption.data).length < 1){
                    window.location = '/404';
                  }
            }

            fetchData();

        },
        []);
   
  
  const URL = window.location.href;
  let content = ''
  if (isloder) {
    content = <div id="pre-loader" className="pre-loader">  <img src="/loading.gif" title='Fetching...' /></div>
  } 

  

    return (
        <>
            <Helmet>
                <title>  Find {stateName} Pin Codes List – All Districts Post office details | SearchMyPincode </title>
                <meta name="description" content={`Find all ${stateName} pin codes list and all districts post office details at SearchMyPincode.in`} />
                <meta name="keywords" content={`${stateName} pin code list, ${stateName} post offices list, ${stateName} postal code, ${stateName} zip code, ${stateName} postal index number,  `} />
                <meta http-equiv="Content-Language" content="English" />
                <link href={` ${URL}`} rel="canonical" />
            </Helmet>
            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                       
                        <h1>{stateName} pin code list</h1>
                        <div className="row">
                            <p>Find complete list of {stateName} pin codes. Explore {stateName} post office pin codes by given district or pin code number. {stateName} has total NIL post offices that is distributed in number districts. </p>
                        </div>

                        <div className="row">&nbsp;</div>

                        <div className="row">
                        

                        <div className="col-sm-10">
                            <strong>
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}><h2>List of all Districts in {stateName} :</h2> </Alert>
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
                                      {content}
                                        {districts.map((city) => (
                                            <tr key={city.district} >
                                                <td>&nbsp; <a className="text-decoration-none" href={`/${transform(stateName)}/${transform(city.district)}-pincode`} onClick={() => setEntity(city.district)}  > {city.district} </a> </td>
                                                <td>&nbsp;  {stateName.replaceAll(/ and /ig, " & ")} </td>
                                            </tr>
                                        ))
                                        }

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="row">
                            <h2>{stateName} Pin Code related FAQ</h2>
                            <h3>Q: How many post offices are there in {stateName} ?</h3>
                            <p>Ans: There are total number of post offices in {stateName} </p>
                            <h3>Q: How many pincodes are there in {stateName}</h3>
                            <p>Ans: There are total number pincodes based on {districts.length} in {stateName}, India.</p>
                        </div>
                        
                      
              

                    </div>

                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CityState;