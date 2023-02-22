import React from 'react';
import getPincodeDataByCity from '../../Services/pincodeByCity.service';
class PincodeForLocation extends React.Component {

    constructor(props) {
        super(props);
        const queryParams = new URLSearchParams(window.location.search);
        this.state = {
            keyword: queryParams.get("q"),
            pincodes: [],
            isFlag: false
        }

    }


    componentDidMount() {
        this.pincodeRead();
    }

    pincodeRead() {
        getPincodeDataByCity(this.state.keyword)
            .then(res => {
                const pincodeList = {
                    Message: res.data[0].Message,
                    PostOffice: res.data[0].PostOffice,
                    Status: res.data[0].Status
                };

                this.setState({ pincodes: pincodeList, isFlag: true });

            });
    }
    render() {

        const PostOffice = this.state.pincodes.PostOffice;
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
                            <h3>Found result for {this.state.keyword}  </h3>
                           
                            <p> Not Found.<br />  </p>
                        </div>

                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                    </div>
                </div>
            );
        }

        if (isFlag && Status != 'Error') {

            return (
                <div className="container-fluid bg-grey">
                    <div className="row">
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                            <h2>Found result for <strong>{this.state.keyword}</strong>  </h2>
                            <h3> <strong>{this.state.keyword}</strong> : - View all pincode result for this location.</h3>
                           
                            <div className="row">
                                {PostOffice.map((pincode) => (
                                    <ol key={pincode.Pincode} >
                                        {pincode.Name},
                                        {pincode.District},
                                        {pincode.State} ,
                                        {pincode.Country} ,
                                        {pincode.Pincode}
                                    </ol>
                                ))
                                }
                            </div>




                            <p><br />  </p>
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
                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                        <div className="col-sm-8">
                            <h2>Found result for <strong>{this.state.keyword}</strong>  </h2>
                            <h4> <strong>{this.state.keyword}</strong> : - {Message}</h4>
                           
                            <p><br />  </p>
                        </div>

                        <div className="col-sm-2">
                            <span className="glyphicon glyphicon-globe logo slideanim"></span>
                        </div>
                    </div>
                </div>
            );

        }

    }
}


export default PincodeForLocation;





