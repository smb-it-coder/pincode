import React , { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import getPincodeDataByCode from '../../Services/pincodeByCode.service';
import getPincodeDataByCity from '../../Services/pincodeByCity.service';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class Location extends React.Component {

    constructor(props) {
        super(props);

            const { location } = this.props.params;
            //alert(location);
            this.breadcrumData  = location.split("-Pincode-Found-In-");
            this.city = this.breadcrumData[0];
            this.cstate = this.breadcrumData[1];
            this.stateLink  = `/${this.breadcrumData[1]}-pincode`;

        this.state = {
            pincodes: [],
            isFlag: false,
        }
    }

    componentDidMount() {
        this.pincodeCityRead();
    }

 

    pincodeCityRead() {
        let city = (this.city).replaceAll(/-/ig, " ");
       // alert(city);
        getPincodeDataByCity(city)
            .then(res => {
                const pincodeList = {
                    Message: res.data[0].Message,
                    PostOffice: res.data[0].PostOffice,
                    Status: res.data[0].Status
                };

                this.setState({ pincodes: pincodeList, isFlag: true});

            });
    }

    render() {
        const PostOffice = this.state.pincodes.PostOffice;
       // const num = ;
        const isFlag = this.state.isFlag;
        const Status = this.state.pincodes.Status;
        const Message = this.state.pincodes.Message;
        const CITY = (this.city).replaceAll(/-/ig, " ");
        const CSTATE = (this.cstate).replaceAll(/-/ig, " ");
        
        

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
                                <Breadcrumb.Item href={this.stateLink}>{this.breadcrumData[1]}</Breadcrumb.Item>
                                <Breadcrumb.Item active> {this.breadcrumData[0]} </Breadcrumb.Item>
                            </Breadcrumb>
                            <hr />
                        </div>
                        <h1>{this.breadcrumData[0]} Pin Code List</h1>
                        <div className="row">
                        <p>Explore pin code of {this.breadcrumData[0]}  situated in {CSTATE}. {this.breadcrumData[0]} comprises of 35 post offices.</p>
                        <p>In order to locate postal codes of post offices belong to {this.breadcrumData[0]}, simply choose its name from the following drop down menu:</p>
                        </div>
                        <h3>Below {CITY} Post Offices Pincodes ({CSTATE})</h3>
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
            const postalCodes = PostOffice.map(v => v.Pincode).filter((item, index, arr) => arr.indexOf(item) === index);



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
                                <Breadcrumb.Item href={this.stateLink}>{this.breadcrumData[1]}</Breadcrumb.Item>
                                <Breadcrumb.Item active> {this.breadcrumData[0]} </Breadcrumb.Item>
                            </Breadcrumb>
                            <hr />
                        </div>

                        <h1>{this.breadcrumData[0]} Pin Code List</h1>
                        <div className="row">
                        <p>Explore pin code of {this.breadcrumData[0]}  situated in {CSTATE}. {this.breadcrumData[0]} comprises of {PostOffice.length} post offices.</p>
                        <p>In order to locate postal codes of post offices belong to {this.breadcrumData[0]}, simply choose its name from the following drop down menu:</p>
                        </div>
                        <h3>Below {CITY} Post Offices Pincodes ({CSTATE})</h3>
                            <div className='row'>

                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                    <th>Post Office</th>
                                    <th>Pincode</th>
                                    <th>District</th>
                                    </tr>
                                </thead>
                                <tbody>

                                {PostOffice.map((pincode) => (
                                    <tr key={pincode.Pincode} >
                                        <td>{pincode.Name}</td>
                                        <td>
                                            <strong> 
                                                <a href={'/pincode/' + pincode.Pincode}> {pincode.Pincode}</a>
                                            </strong>
                                         </td>
                                        <td>{pincode.District}</td>
                                        
                                        
                                    </tr>
                                ))
                                }
                                   
                                </tbody>
                                </Table>


                            </div>
                            <div className="row">&nbsp;</div>
                            <div className="row">&nbsp;</div>
                            <div className="row"><p><strong>Browse locations of North Delhi by postal codes:-</strong></p></div>
                            
                            <div className="row">
                            {postalCodes.map((code) => (
                               
                                 <div className="col-sm-6" key={code}>
                                    <p><strong> <a href={'/pincode/' + code}>{code}</a>
                                    </strong></p>
                                 </div>
                                 
                                    
                                ))
                                }
                           
                            <div className="col-sm-6"></div>
                            </div>
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
                                <Breadcrumb.Item href={this.stateLink}>{this.breadcrumData[1]}</Breadcrumb.Item>
                                <Breadcrumb.Item active> {this.breadcrumData[0]} </Breadcrumb.Item>
                            </Breadcrumb>
                            <hr />
                        </div>
                        <h1>{this.breadcrumData[0]} Pin Code List</h1>
                        <div className="row">
                        <p>Explore pin code of {this.breadcrumData[0]}  situated in {CSTATE}. {this.breadcrumData[0]} comprises of 35 post offices.</p>
                        <p>In order to locate postal codes of post offices belong to {this.breadcrumData[0]}, simply choose its name from the following drop down menu:</p>
                        </div>
                        <h3>Below {CITY} Post Offices Pincodes ({CSTATE})</h3>
                        
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


export default  withParams(Location);





