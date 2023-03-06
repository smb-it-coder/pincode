
import React, { useState, useEffect, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import getVillagePincode from '../../Services/getVillagePincode.service';
import districtsPincode from '../../Services/districts.service';
import { Helmet } from "react-helmet";
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import getPincodeByLocation from '../../Services/pincodeByLocation.service';
import getPincodeBySlug from '../../Services/pincodeBySlug.service';
import * as __CONSTA from '../../Services/consta';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Place extends React.Component {

    constructor(props) {
        super(props);
        let { area } = this.props.params;
       
      // this.dist = this.capitalizeFirstLetter(district);
       this.dist_address = 'NA';
       this.dist_pincode = 'NA';
       this.slug = area;
      
       
       const removeEntity = (item) =>{
            if (localStorage.getItem(item)) {
                localStorage.removeItem(item);
            } else {
                return false;
            }
            return true;
        }
        removeEntity('childId');
        removeEntity('childName');
        removeEntity('row');
       
       console.log(' level 3 ', localStorage);

        this.state = {
            pincodes: [],
            isFlag: false,
            count: 0,
            district: '',
            isloder: true,
            similar: [],
        }

       // const [isloder , setIsloder] = useState([true]);

    }


     capitalizeFirstLetter(str) {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }
    

    componentDidMount() {
        this.pincodeBySlug();
        this.similarDataFetch();
       // setTimeout(function() { this.similarDataFetch(); }, 3000);
    }

    pincodeBySlug() {

        getPincodeBySlug(this.slug)
            .then(res => {
                const pincodeList = {
                    PostOffice: res.data,
                    Status: res.status
                };
                
                const numRows = res.count;
                localStorage.setItem('district', res.data[0].district);
                localStorage.setItem('state',res.data[0].state);
                this.setState({ pincodes: pincodeList, isFlag: true, isloder: false, count: numRows });
            });
    }

    similarDataFetch() {
        const location = this.slug.split("-");
   
         getPincodeByLocation(location[0]).then(res => {
            const similar = {
                similar: res.data,
                status: res.status,
                numRows : res.count,
            };
           // alert('hhhh');
            
            this.setState({similar: similar});

        });
       
    }

  


    render() {
        
        const URL = window.location.href;
        const isFlag = this.state.isFlag;
        const Status = this.state.pincodes.Status;
       
       

        let content = ''
        if (this.state.isloder) { 
          content = <div id="pre-loader" className="pre-loader">  <img src="/loading.gif" title='Fetching...' /></div>
        } 

     

        if (!isFlag && Status !== 404) {
            return (
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                        <div id="pre-loader" className="pre-loader">  <img src="/loading.gif" title='Fetching...' /></div>
                        </div>
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                    </div>
                </div>
            );
        }

        if (isFlag && Status !== 'Error') {

             const places = this.state.pincodes.PostOffice;
             const similar = this.state.similar;
             console.log('  similar  ', similar);
             const  similarcontent = similar.similar?similar.similar:[];
             console.log('  similarcontent  ', similarcontent);

            const keySlug =  this.slug.split("-");
            

            return (
               
                <div className="container-fluid bg-grey">
                     <Helmet>
                        <title>{places[0].village}  Pin Code - {places[0].village} , {places[0].district} Post Office Area PIN Codes | {__CONSTA.NAMESPACE} </title>
                        <meta name="description" content={`Find ${places[0].village}  Pin Codes and ${places[0].village} Near by Area PIN Codes. Search all pin codes of ${places[0].village} location, ${places[0].district}.`} />
                        Keywords:
                        <meta name="keywords" content={`${places[0].village} PIN Code, ${places[0].village}   zip code,  ${places[0].village}  postal code, ${places[0].district} PIN Code, ${places[0].state} PIN Code, ${places[0].village}   area pin code, search my pincode`} />
                        <link href={`${URL}`} rel="canonical" />
                        <meta http-equiv="Content-Language" content="English" />
                    </Helmet>


                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                        <h1>{places[0].village} Pincode {places[0].pincode}</h1>
                        <div className="row">
                            <p>{places[0].village} Pin Code is {places[0].pincode}. Pin Code or Zip Code is also known as Postal Code.
                            {places[0].village} is located in district {places[0].district},  {places[0].state} in india.
                                Following are the details of {places[0].village}pin code:</p></div>
                        <div className="row">&nbsp;</div>

                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Details of post office {places[0].village} : </h2>
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                        <strong> {places[0].pincode} ( {places[0].village} {places[0].office} ) </strong>
                                    </Alert>
                                ))}

                            </div>
                        </div>
                       

                            <div className="row">
                            <div className="col-sm-10">

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
                                    <tbody> {content}
                                        {places.map((area) => (
                                         <tr key={area.id} >
                                            <td>{area.village}   </td>
                                            <td>&nbsp; <a class="text-decoration-none"
                                                 href={`/pincode/${area.pincode}`}
                                                >{area.pincode}</a>  </td>
                                            <td>&nbsp; <strong>{area.office}</strong> </td>
                                            <td>&nbsp; {area.subdistrict ? area.subdistrict : 'NA'} </td>
                                            <td>&nbsp; {area.district} </td>
                                            <td>&nbsp; {area.state} </td>
                                        </tr>

                                        )) }

                                    </tbody>
                                </Table>
                               
                            </div>
                        </div>
                            <div className="row">&nbsp;</div>

                            <div className="row">
                            <div className="col-sm-12">
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                        <h2>Similar locations ({keySlug[0]}) across all places  :</h2>
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
                                            <th>Daak Khana</th>
                                            <th>Subdistrict</th>
                                            <th>District</th>
                                            <th>state</th>
                                            <th>Pincode</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {content}
                                        {similarcontent.map((similar) => (
                                            <tr key={similar.id} >
                                                 <td>&nbsp; <a class="text-decoration-none" href={`/pin-code/${similar.slug}`} ><strong>{similar.village}</strong> </a> </td>
                                                 <td>&nbsp; <strong>{similar.office}</strong> </td>
                                                <td>&nbsp; {similar.subdistrict ? similar.subdistrict : 'NA'} </td>
                                                <td>&nbsp; {similar.district} </td>
                                                <td>&nbsp; {similar.state} </td>
                                                <td>&nbsp; <a class="text-decoration-none" href={`/pincode/${similar.pincode}`} >{similar.pincode}</a> </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </div>



                            <div className="row">
                                <h2>{places[0].village} ({places[0].office} )  Pin Code or Postal Code FAQ</h2>
                                <h3>Q: What is {places[0].village}&nbsp;{places[0].office} Pincode in {places[0].state}?</h3>
                                <p>Ans: {places[0].village} ({places[0].office} ) Pin Code is {places[0].pincode}. {places[0].office} is located in district {places[0].district} in {places[0].state} , India.</p>
                                <h3>Q: What is the current address of {places[0].village} ({places[0].office} )  Post Office, {places[0].state}?</h3>
                                <p>Ans: {places[0].village} ({places[0].office} )  Post Office is located at {places[0].district}, {places[0].state}, at pincode {places[0].pincode}. {places[0].subdistrict} Post Office is a Sub Post Office of {places[0].district}. </p>
                                <h3>Q: Pin code number {places[0].pincode} is for which area?</h3>
                                <p>Ans: Pincode {places[0].pincode} is for {places[0].village} ({places[0].office} ) . It is located in {places[0].district}.</p>

                            <p>&nbsp;</p>
                        </div>
                        </div>

                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                       
                        </div>
                    </div>
                    <div className="row">&nbsp;</div>
                    <div className="row">&nbsp;</div>
                </div>
               
            );

        }

        if (isFlag && (Status === 'Error' || Status === 404)) {

            return (
                <div className="container-fluid bg-grey">
                    <Helmet>
                        <meta http-equiv="Content-Language" content="English" />
                        <link href={`${URL}`} rel="canonical" />
                    </Helmet>
                    <div className="row">
                        <div className="col-sm-3">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-6">
                            <h2 className='center'>PIN CODES NOT Found.</h2>
                            <div className="row">
                                NOT FOUND
                            </div>

                            <p><br />  </p>
                        </div>

                        <div className="col-sm-3">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                    </div>
                </div>
            );

        }

    }
}


export default withParams(Place);





