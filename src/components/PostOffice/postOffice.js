import React, { useState, useEffect, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import getPincodeDataByCode from '../../Services/pincodeByCode.service';
import { Helmet } from "react-helmet";
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class PostOfficeByPincode extends React.Component {

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
        this.pincodeRead();
    }

    pincodeRead() {

        getPincodeDataByCode(this.state.pincode)
            .then(res => {
                
               
                if(res.status === 404){
                    let pincodeList = {
                        Message: '',
                        PostOffice: [],
                        Status: res.status
                    };
                    let numRows =  0;
                    this.setState({ pincodes: pincodeList, isFlag: false, count: numRows || 0 });

                } else {
                    let pincodeList = {
                        Message: '',
                        PostOffice: res.data,
                        Status: res.status
                    };
                    let numRows =  res.count;
                    this.setState({ pincodes: pincodeList, isFlag: true, count: numRows || 0 });

                }
                
               

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
                            <h3>Pincode data not found for {this.state.pincode}  </h3>
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
           // console.log('PostOffice ===> ', PostOffice);
              let stateName = PostOffice[0].state;
              const stateLink =  stateName.replaceAll(/ /ig, "-");
            return (
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
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
                                    <div className="col-sm-6" key="{pincode.id}"><strong>{pincode.village} </strong>, {pincode.office} {pincode.subdistrict} </div>
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


export default withParams(PostOfficeByPincode);





