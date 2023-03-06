import React, { useState, useReducer, Fragment, useEffect } from 'react';
import { Helmet } from "react-helmet";
//import Helmet, { HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import * as __CONSTA from '../../Services/consta';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
//import other from '../../Services/similarContent.service';
import getPincodeByLocation from '../../Services/pincodeByLocation.service';
import getPincodeBySlug from '../../Services/pincodeBySlug.service';

function ChildComponent() {

    
    const params = useParams();
    const slug = params.area;
    const location = slug ? (slug.replaceAll(/-/ig, " ")).replace(/ s o/g, "") : '';
   
    const [similarcontent, setSimilarcontent] = useState([]);
    const [childcontent, setChildcontent] = useState([]);
    const [stateinfo, setStateinfo] = useState([]);
    const [isloder, setIsloder] = useState([true]);
    const childName = localStorage.getItem("childName");
    const place = slug ? slug.split(" ") : childName.split(" ");
console.log('top childcontent ==> ', childcontent);

    useEffect(() => {
        async function childDataFetch() {
            let pincodeData = await getPincodeBySlug(slug);
            alert('slug');
            if ((pincodeData.data).length > 0) {
                let stateData = { state: pincodeData.data[0].state, district: pincodeData.data[0].district };
                setStateinfo(stateData);
            }

            //localStorage.setItem("row",pincodeData.data[0] );
            console.log('pincodeData.data[0]===> inside useeffect ',pincodeData.data);
            alert(slug);
            setChildcontent(pincodeData.data);
        }

        async function similarDataFetch() {
            let localArea = place ? place[0] : location
            let pincodeData = await getPincodeByLocation(slug);
            setSimilarcontent(pincodeData.data);
        }

        childDataFetch();
        similarDataFetch();
        setIsloder(false);
    }, []);

    
    const URL = window.location.href;

    if (localStorage.getItem("district")) {
        let district = localStorage.getItem("district");
    } else {
        let district = stateinfo.district;
    }

    if (localStorage.getItem("state")) {
        let stateName = localStorage.getItem("state");
    } else {
        let stateName = stateinfo.state;

    }

   
   // console.log('childcontent===>',childcontent);

   // const childLocal = [];//sJSON.parse(localStorage.getItem("row"));
    
    //const childEntity =  childcontent[0];

   // console.log('childcontent', childcontent);

    let content = ''
    if (isloder) {
        content = <div id="pre-loader" className="pre-loader">  <img src="/loading.gif" title='Fetching...' /></div>
    }

    return (
        <Fragment>
            <Helmet>
                <title>{childcontent[0].village}  Pin Code - {childcontent[0].village} , {childcontent[0].district} Post Office Area PIN Codes | {__CONSTA.NAMESPACE} </title>
                <meta name="description" content={`Find ${childcontent[0].village}  Pin Codes and ${childcontent[0].village} Near by Area PIN Codes. Search all pin codes of ${childcontent[0].village} location, ${childcontent[0].district}.`} />
                Keywords:
                <meta name="keywords" content={`${childcontent[0].village} PIN Code, ${childcontent[0].village}   zip code,  ${childcontent[0].village}  postal code, ${childcontent[0].district} PIN Code, ${childcontent[0].state} PIN Code, ${childcontent[0].village}   area pin code, search my pincode`} />
                <link href={`${URL}`} rel="canonical" />
                <meta http-equiv="Content-Language" content="English" />
            </Helmet>
            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                        <h1>{childName} Pincode {childcontent[0].pincode}</h1>
                        <div className="row">
                            <p>{childName} Pin Code is {childcontent[0].pincode}. Pin Code or Zip Code is also known as Postal Code.
                                {childName} is located in district {childcontent[0].district},  {childcontent[0].state} in india.
                                Following are the details of {childName}pin code:</p></div>
                        <div className="row">&nbsp;</div>

                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Details of post office {childcontent[0].village} : </h2>
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                        <strong> {childcontent[0].pincode} ( {childcontent[0].office} ) </strong>
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
                                        <tr key={childcontent[0].id} >
                                            <td>{childcontent[0].village}   </td>
                                            <td>&nbsp; {childcontent[0].pincode} </td>
                                            <td>&nbsp; <strong>{childcontent[0].office}</strong> </td>
                                            <td>&nbsp; {childcontent[0].subdistrict ? childcontent[0].subdistrict : 'NA'} </td>
                                            <td>&nbsp; {childcontent[0].district} </td>
                                            <td>&nbsp; {childcontent[0].state} </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                        <h2>Similar post offices with {childcontent[0].village} ({childcontent[0].pincode} ) pin code:</h2>
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
                                        {content}
                                        {similarcontent.map((similar) => (
                                            <tr key={similar.id} >
                                                <td>&nbsp; {similar.pincode} </td>
                                                <td>&nbsp; {similar.village} ,<strong>{similar.office}</strong> </td>
                                                <td>&nbsp; {similar.subdistrict ? similar.subdistrict : 'NA'} </td>
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
                            <h2>{childcontent[0].village} ({childcontent[0].office} )  Pin Code or Postal Code FAQ</h2>
                            <h3>Q: What is {childcontent[0].village}&nbsp;{childcontent[0].office} Pincode in {childcontent[0].state}?</h3>
                            <p>Ans: {childcontent[0].village} ({childcontent[0].office} ) Pin Code is {childcontent[0].pincode}. {childcontent[0].office} is located in district {childcontent[0].district} in {childcontent[0].state} , India.</p>
                            <h3>Q: What is the current address of {childcontent[0].village} ({childcontent[0].office} )  Post Office, {childcontent[0].state}?</h3>
                            <p>Ans: {childcontent[0].village} ({childcontent[0].office} )  Post Office is located at {childcontent[0].district}, {childcontent[0].state}, at pincode {childcontent[0].pincode}. {childcontent[0].subdistrict} Post Office is a Sub Post Office of {childcontent[0].district}. </p>
                            <h3>Q: Pin code number {childcontent[0].pincode} is for which area?</h3>
                            <p>Ans: Pincode {childcontent[0].pincode} is for {childcontent[0].village} ({childcontent[0].office} ) . It is located in {childcontent[0].district}.</p>

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