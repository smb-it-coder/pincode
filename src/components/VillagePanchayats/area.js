
import React, { useState, useEffect, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import getVillagePincode from '../../Services/getVillagePincode.service';
import { Helmet } from "react-helmet";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class AreaDistricts extends React.Component {

    constructor(props) {
        super(props);
        let { area } = this.props.params;
       const linkPath =  area.split("pincode-");
       const district = (linkPath[1]).replaceAll(/-/ig, " ");
       

       
       console.log(' level 2 => localStorage', localStorage);

        this.state = {
            pincodes: [],
            isFlag: false,
            count: 0,
            village: district,
            blink: '', // bread crum privious path
        }



    }

    

    componentDidMount() {
        this.pincodeRead();
    }

    pincodeRead() {

        getVillagePincode(this.state.pincode)
            .then(res => {
                const pincodeList = {
                    Message: res.data[0].Message,
                    PostOffice: res.data[0].PostOffice,
                    Status: res.data[0].Status
                };
                const numRows = res.data[0].PostOffice.length;
                this.setState({ pincodes: pincodeList, isFlag: true, count: numRows || 0 });

            });
    }

   



    render() {
        const PostOffice = this.state.pincodes.PostOffice;
        // const numRows = membersToRender.length
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
              let stateName = PostOffice[0].State;
              const stateLink =  stateName.replaceAll(/ /ig, "-");
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
                                    of      <Link to={`/${stateLink}-pincode`}> <strong>{PostOffice[0].State}</strong></Link> in India.
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


export default withParams(AreaDistricts);





