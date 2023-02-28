
import React, { useState, useEffect, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import getVillagePincode from '../../Services/getVillagePincode.service';
import districtsPincode from '../../Services/districts.service';
import { Helmet } from "react-helmet";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class AreaDistricts extends React.Component {

    constructor(props) {
        super(props);
        let { area } = this.props.params;
       const linkPath =  area.split("-pincode");
       const district = (linkPath[0]).replaceAll(/-/ig, " ");
       localStorage.setItem('district', district);
       
       console.log(' level 2 => localStorage', localStorage);

        this.state = {
            pincodes: [],
            isFlag: false,
            count: 0,
            district: district,
        }



    }

    

    componentDidMount() {
        this.pincodeRead();
    }

    pincodeRead() {

        let state = localStorage.getItem('state');
        let district = localStorage.getItem('district')
        districtsPincode(state, district)
            .then(res => {

               // console.log('res', res);
                const pincodeList = {
                    PostOffice: res.data,
                    Status: res.status
                };
                const numRows = res.count;
                this.setState({ pincodes: pincodeList, isFlag: true, count: numRows });

            });
    }

  


    render() {
        
        // const numRows = membersToRender.length
        const isFlag = this.state.isFlag;
        const Status = this.state.pincodes.Status;
        const Message = '';


        const transform = (name) => {
            let str = name.replaceAll(/ /ig, "-");
            let str1 = str.replace(/[^a-zA-Z0-9]/g, '-');
            let city =  str1 + '-pincode';

            return (city.toLowerCase()).replaceAll(/--/ig, "-");
        }

        const setEntity = (id, childName, row) => {
            localStorage.setItem('childId', id);
            localStorage.setItem('childName', childName);
            localStorage.setItem('row', JSON.stringify(row));
            //console.log(' level 31 => localStorage', localStorage);
        }

     

        if (!isFlag) {
            return (
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                            404 NOT FOUND
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

            return (
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">

                            <div className="row">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active> Pincode {this.state.pincode} </Breadcrumb.Item>
                                </Breadcrumb>
                                <hr />
                               
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
                                                 href={`/v/${transform(area.village + '-' + area.office)}`}
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
                            <div className="row">&nbsp;</div>
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

        if (isFlag && Status === 'Error') {

            return (
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-3">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-6">
                            <h2 className='center'>PIN CODES SEARCH.</h2>
                            <h3>Found result for {this.state.pincode}  </h3>
                            <p> {this.state.pincode} : - View all pincode result for this postal code.</p>

                            <div className="row">
                                {Message}
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


export default withParams(AreaDistricts);





