
import React, { useState, useEffect, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import getVillagePincode from '../../Services/getVillagePincode.service';
import districtsPincode from '../../Services/districts.service';
import districtsInfo from '../../Services/districtsInfo.service';
//import slugInfo from '../../Services/slugInfo.service';
import { Helmet } from "react-helmet";
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class AreaDistricts extends React.Component {

    constructor(props) {
        super(props);
        let { state, area } = this.props.params;

        let stateAlias = state.replaceAll(/-/ig, " ");
        const linkPath = area.split("-pincode");
        const district = (linkPath[0]).replaceAll(/-/ig, " ");
        this.dist = this.capitalizeFirstLetter(district);
        this.dist_address = 'NA';
        this.dist_pincode = 'NA';

        localStorage.setItem('district', district);
        localStorage.setItem('state', stateAlias);
        this.stateName = stateAlias ? stateAlias : localStorage.getItem('state');
        this.stateName = this.stateName.replaceAll(/ and /ig, " & ")
        const removeEntity = (item) => {
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

        console.log(' level 2 ', localStorage);

        this.state = {
            pincodes: [],
            isFlag: false,
            count: 0,
            district: district,
            info: [],
            isloder: true,
        }

        // const [isloder , setIsloder] = useState([true]);

    }


    capitalizeFirstLetter(str) {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }


    componentDidMount() {
        this.pincodeRead();
        this.getInfo();
       // this.slugInfo();
    }

    pincodeRead() {
        //alert('pinread');

        let state = this.stateName ? this.stateName : localStorage.getItem('state');
        let district = this.dist ? this.dist : localStorage.getItem('district')

        districtsPincode(state, district)
            .then(res => {

                if (res.status === 404) {
                    window.location = '/404';
                }

                const pincodeList = {
                    PostOffice: res.data,
                    Status: res.status
                };

                const numRows = res.count;
                this.setState({ pincodes: pincodeList, isFlag: true, isloder: false, count: numRows });

            }).catch((err) => {
                let pincodes = {
                    PostOffice: [],
                    Status: 404
                };
                this.setState({ pincodes: pincodes, isFlag: true, isloder: false, count: 0 });

                window.location = '/404';
            });
    }

    getInfo() {

        districtsInfo(this.dist)
            .then(res => {
                this.dist_pincode = (res.data[0]).pincode;
                this.dist_address = (res.data[0]).state;
                this.setState({ info: res.data });
            }).catch((err) => {
                window.location = '/404';
            });

            
    }

    slugInfo() {

        //    slugInfo();
    }


    render() {

        const URL = window.location.href;
        const isFlag = this.state.isFlag;
        const Status = this.state.pincodes.Status;
        const Message = '';


        const transform = (name) => {
            let str = name.replaceAll(/ /ig, "-");
            let city = str.replace(/[^a-zA-Z0-9]/g, '-');
            return (city.toLowerCase()).replaceAll(/--/ig, "-");
        }

        const setEntity = (id, childName, row) => {
            localStorage.setItem('childId', id);
            localStorage.setItem('childName', childName);
            localStorage.setItem('row', JSON.stringify(row));
        }

        let content = ''
        if (this.state.isloder) {
            content = <div id="pre-loader" className="pre-loader">  <img src="/loading.gif" title='Fetching...' /></div>
        }



        if (!isFlag) {

            return (
                <div className="container-fluid bg-grey">
                    <Helmet>
                        <title>{this.dist} Pin Codes List – {this.stateName} Post offices Address | SearchMyPincode </title>
                        <meta name="description" content={`Find all ${this.dist} pin codes list and ${this.dist}, ${localStorage.getItem('state')} post offices address at searchmypincode.in`} />
                        <meta name="keywords" content={` ${this.dist} pin code, ${this.dist} pin code list, ${this.dist} post office address, ${this.dist} postal code, district ${this.dist} zip code, ${localStorage.getItem('state')} pin code`} />
                        <meta http-equiv="Content-Language" content="English" />
                        <link href={`${URL}`} rel="canonical" />
                    </Helmet>
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                            {content}
                        </div>
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                    </div>
                </div>
            );
        }

        if (isFlag && Status !== 'Error') {

            const locations = this.state.pincodes.PostOffice;
            const info = this.state.info[0];

            // console.log('info', info);

            return (
                <div className="container-fluid bg-grey">
                    <Helmet>
                        <title>{this.dist} Pin Codes List – {this.stateName} Post offices Address | SearchMyPincode </title>
                        <meta name="description" content={`Find all ${this.dist} pin codes list and ${this.dist}, ${localStorage.getItem('state')} post offices address at searchmypincode.in`} />
                        <meta name="keywords" content={` ${this.dist} pin code, ${this.dist} pin code list, ${this.dist} post office address, ${this.dist} postal code, district ${this.dist} zip code, ${localStorage.getItem('state')} pin code`} />
                        <meta http-equiv="Content-Language" content="English" />
                        <link href={`${URL}`} rel="canonical" />
                    </Helmet>


                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                            <div className="row">
                                <h1>{this.dist} pin code</h1>
                                <p> {this.dist} Head office Pin Code is <strong>{this.dist_pincode}</strong> . Pin Code or Zip Code is also known as Postal Code.  <strong>{this.dist}</strong> is located in {info.state}, India. </p>
                                <p>Find complete list of {this.dist} pin codes. Explore {this.dist} post office pin codes by given location or pin code number.
                                    Following are the list of {this.dist} pin codes:</p>

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
                                                        href={`/pin-code/${transform(area.slug)}`}
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
                            <div className="row">&nbsp;</div>
                            <div className="row">
                                <h2>{this.dist} {this.stateName} Pin Code FAQ</h2>
                                <h3>Q: What is {this.dist} PIN Code Number in {this.stateName}?</h3>
                                <p>Ans: {this.dist} Pin Code number is {this.dist_pincode}. District {this.dist} is located in {this.stateName}, India.</p>
                                <h3>Q: What is the main address of {this.dist} Head Post Office,{this.stateName}?</h3>
                                <p>Ans: {this.dist} Head Post Office is located at {this.dist}, {this.stateName}, at pincode {this.dist_pincode}. It is situated at {this.dist_address}</p>

                                <h3>Q: How many post offices are there in {this.dist}</h3>
                                <p>Ans: There are total {locations.length} post offices in {this.dist}.</p>


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

        

    }
}


export default withParams(AreaDistricts);





