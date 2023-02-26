import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getPincodeDataByCode from '../../Services/pincodeByCode.service';
//import getPincodeDataByCity from '../../Services/pincodeByCity.service';
import getPincodeByLocation from '../../Services/pincodeByLocation.service';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';


class DataForPincode extends React.Component {

    constructor(props) {
        super(props);
        this.queryParams = new URLSearchParams(window.location.search);
        //this.postOffices = [];
        this.state = {
            keyword: this.queryParams.get("q"),
            pincodes: [],
            isFlag: false,
            isCity: false
        }
    }

    componentDidMount() {

        if (!isNaN(this.queryParams.get("q"))) {
            this.pincodeRead(this.queryParams.get("q"));
        } else {
            this.pincodeLocationRead(this.queryParams.get("q"));
        }

    }

    pincodeRead(pincode) {

        getPincodeDataByCode(pincode)
            .then(res => {
                const pincodeList = {
                    Count: res.count,
                    PostOffice: res.data,
                    Status: res.status
                };
                this.postOffices = pincodeList;
                this.setState({ pincodes: pincodeList, isFlag: true });

            });
    }

    pincodeLocationRead(location) {
        getPincodeByLocation(location)
            .then(res => {

                console.log('getPincodeByLocation === ', res.data);
                const pincodeList = {
                    Count: res.count,
                    PostOffice: res.data,
                    Status: res.status
                };

                this.setState({ pincodes: pincodeList, isFlag: true, isCity: true });

            });
    }

    render() {

        const isFlag = this.state.isFlag;
        const Status = this.state.pincodes.Status;
        const Message = '';


        if (!isFlag) {
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
                                    <Breadcrumb.Item active> Search </Breadcrumb.Item>
                                </Breadcrumb>
                                <hr />
                            </div>


                            <h3>Found result for {this.state.keyword}  </h3>
                            <p> {this.state.keyword} : - View all pincode result for this postal code.</p>
                            <p><br />  </p>
                        </div>
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                    </div>
                </div>
            );
        }

        if (isFlag && Status !== 'Error') {
            const PostOffice = this.state.pincodes.PostOffice;
            console.log('render () -> PostOffice', this.state.pincodes);
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
                                    <Breadcrumb.Item active> Search </Breadcrumb.Item>
                                </Breadcrumb>
                                <hr />
                            </div>

                            <h3>Found result for <strong>{this.state.keyword}</strong>  </h3>
                            <p>
                                <strong>
                                    {(() => {
                                        if (this.state.isCity) {
                                            return (
                                                <Link>{this.state.keyword}</Link>
                                            )
                                        } else {
                                            return (
                                                <Link to={`/pincode/${this.state.keyword}`}><strong>{this.state.keyword}</strong></Link>
                                            )
                                        }
                                    })()}
                                </strong> : - View all pincode result for this postal code.
                            </p>
                            <div className="row">
                                <h4><strong>{PostOffice[0].office} <strong>
                                                        <a href={'/pincode/' + PostOffice[0].pincode}> {PostOffice[0].pincode}</a>
                                                    </strong></strong> </h4>
                            </div>
                            <div className="row">&nbsp;</div>

                            <div className="row">



                                <Table responsive="sm">
                                    <thead>
                                        <tr>
                                            <th> Area </th>
                                            <th>Pincode</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {PostOffice.map((pincode) => (
                                            <tr key={pincode.pincode} >
                                                <td>{pincode.office}</td>
                                                <td>{pincode.pincode}</td>
                                            </tr>
                                        ))
                                        }

                                    </tbody>
                                </Table>


                            </div>



                            <div className="row">&nbsp;</div>
                        </div>

                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                    </div>
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
                            <div className="row">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active> Search </Breadcrumb.Item>
                                </Breadcrumb>
                                <hr />
                            </div>

                            <h2 className='center'>PIN CODES SEARCH.</h2>
                            <h3>Found result for {this.state.keyword}  </h3>
                            <p> {this.state.keyword} : - View all pincode result for this postal code.</p>

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


export default DataForPincode;





