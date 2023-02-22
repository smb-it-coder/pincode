import React, { useState, useEffect } from 'react';
//import getPincodeDataByCode from '../../Services/pincodeByCode.service';

const ReadSearch = () => {
   const [pincodes, setpincodes] = useState([]);
   const queryParams = new URLSearchParams(window.location.search);
   useEffect(() => {

    const url =  `https://api.postalpincode.in/pincode/${queryParams.get("q")}`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
       console.log(data[0]);
       setpincodes(data[0]);
    })
    .catch((err) => {
       console.log(err.message);
    });





   }, []);

return (
    <div className="container-fluid bg-grey">
        <div className="row">
            <div className="col-sm-2">
                <span className="glyphicon glyphicon-globe logo slideanim"></span>
            </div>
            <div className="col-sm-8">
                <h3>Found result for <strong>{queryParams.get("q")}</strong>  </h3>
                <p> <strong>{queryParams.get("q")}</strong> : - View all pincode result for this postal code.</p>
                <div className="row">
                    <h4>Result found for query <strong>{queryParams.get("q")}</strong> </h4>
                </div>
                <div className="row">
                {pincodes.PostOffice.map((pincode) => (
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

};

export default ReadSearch;