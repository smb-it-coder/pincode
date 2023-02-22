import React, { useState, useEffect, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import getPincodeDataByCity from '../../Services/pincodeByCity.service';
import { Helmet } from "react-helmet";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class PostOfficePincodeByCity extends React.Component {

    constructor(props) {
        super(props);
        let { pincode } = this.props.params;
        this.state = {
            pincode: pincode,
            pincodes: [],
            isFlag: false,
            count: 0
        }
    }

    componentDidMount() {
        this.pincodeCityRead(this.state.pincode);
    }

    pincodeCityRead(city) {
        getPincodeDataByCity(city)
            .then(res => {
                const pincodeList = {
                    Message: res.data[0].Message,
                    PostOffice: res.data[0].PostOffice,
                    Status: res.data[0].Status
                };

                this.setState({ pincodes: pincodeList, isFlag: true , isCity: true});

            });
    }



    render() {
        const PostOffice = this.state.pincodes.PostOffice;
        // const numRows = membersToRender.length
        const isFlag = this.state.isFlag;
        const Status = this.state.pincodes.Status;
        const Message = this.state.pincodes.Message;


        if (!isFlag) {
            return (
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                            <h3>Found result for {this.state.pincode}  </h3>
                            <p> {this.state.pincode} : - View all pincode result for this postal code.</p>
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



                            <h3> <strong>Pincode : {this.state.pincode}</strong>  </h3>

                            <div className="row">
                                <p>Total number of {this.state.count} post offices linked with pincode <strong>{this.state.pincode}</strong> .
                                    This postal index number belongs to
                                    <Link to={`#`}> <strong>{PostOffice[0].District}</strong></Link>  District
                                    of      <Link to={`#`}> <strong>{PostOffice[0].State}</strong></Link> in India.
                                </p>

                            </div>
                            <div className="row">
                                <strong> List of Post Offices holding Pincode {this.state.pincode}</strong>
                            </div>
                            <div className="row">
                                <p>Given below is the list of all post offices resulting to pincode number {this.state.pincode} &nbsp; :-</p>
                                {PostOffice.map((pincode) => (
                                    <div className="col-sm-6" key="{pincode.Name}">{pincode.Name}</div>
                                ))}


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


export default withParams(PostOfficePincodeByCity);





