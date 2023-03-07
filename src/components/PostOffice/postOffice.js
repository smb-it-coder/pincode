import React, { useState, useEffect, Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import getPincodeDataByCode from '../../Services/pincodeByCode.service';
import { Helmet } from "react-helmet";

import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
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

                let pincodeList = {
                    Message: '',
                    PostOffice: res.data,
                    Status: res.status
                };
                let numRows =  res.count;
                this.setState({ pincodes: pincodeList, isFlag: true, count: numRows || 0 });
               

            }).catch((err) => {
                let pincodeList = {
                    Message: '',
                    PostOffice: [],
                    Status: 404
                };
                let numRows =  0;
                this.setState({ pincodes: pincodeList, isFlag: true, count: numRows || 0 });

                window.location = '/404';
            });
    }



    render() {
        const PostOffice = this.state.pincodes.PostOffice;
        // const numRows = membersToRender.length
        const isFlag = this.state.isFlag;
        const Status = this.state.pincodes.Status;
        const Message = this.state.pincodes.Message;
       


        if (!isFlag && Status !== 404) {
            
         
            
            return (
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                        <div id="pre-loader" className="pre-loader">  <img src="/loading.gif" title='Fetching...' /></div>
                            <p><br />  </p>
                        </div>
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                    </div>
                </div>
            );
        }

        if (isFlag && Status !== 404) {
          
              let stateName = (Status == 404) ? '' : PostOffice[0].state;
              const stateLink =  stateName?stateName.replaceAll(/ /ig, "-"):null;
            return (
                <div className="container-fluid bg-grey">
                    <Helmet>
                        <title>Pincode: {this.state.pincode?this.state.pincode:'' }, Get list of all Post Offices for {PostOffice[0].district?PostOffice[0].district :'' } | SearchMyPincode</title>
                        <meta name="description" content={`Find list of all post offices for Pin code ${this.state.pincode?this.state.pincode:'' } for ${PostOffice[0].district?PostOffice[0].district :'' } at Searchmypincode.in`} />
                        <meta name="keywords" content={` pincode, pincode ${this.state.pincode?this.state.pincode:'' }, ${this.state.pincode?this.state.pincode:'' } details, ${this.state.pincode?this.state.pincode:'' } list, ${this.state.pincode?this.state.pincode:'' } post offices`} />
                        <link href={`${URL}`} rel="canonical" />
                        <meta http-equiv="Content-Language" content="English" />
                    </Helmet>
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                            <h1>Details of pin code: {this.state.pincode}</h1>

                            <div className="row">
                            <p>Pin Code {this.state.pincode} belongs to district {PostOffice[0].district}, {PostOffice[0].state}, India. There are {this.state.count} of post offices for pincode {this.state.pincode}.
                                  Following are the list of all post offices for pin code {this.state.pincode}</p>
                            </div>
                            <div className="row">
                            <h2>Details of post offices for pin code {this.state.pincode}:</h2>

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
                                        {PostOffice.map((similar) => (
                                            <tr key={similar.id} >
                                                <td>&nbsp; {similar.pincode} </td>
                                                <td>&nbsp; {similar.village} ,<strong>{similar.office}</strong> </td>
                                                <td>&nbsp; {similar.subdistrict?similar.subdistrict:'NA'} </td>
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
                                <h2>Pin Code or Postal Code {this.state.pincode} FAQs</h2>
                                <h3>Q: How many post offices are there for pin code {this.state.pincode}?</h3>
                                <p>Ans: There are {this.state.count} post offices for pin code {this.state.pincode}.</p>
                                <h3>Q: Pin code number {this.state.pincode} is for which area?</h3>
                                <p>Ans: Pincode {this.state.pincode} is for {PostOffice[0].village}, {PostOffice[0].office}. It is located in {PostOffice[0].district}.</p>
                            </div>
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

        if (isFlag && (Status === 'Error' ||  Status == 404)) {
            window.location = '/404';
            return (
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-3">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">   Pincode not found! </div>
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





