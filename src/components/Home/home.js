import React, { useState, useReducer, Fragment } from 'react';
import SelectState from '../util/SelectState';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { Helmet } from "react-helmet";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}


function BodyForHome() {
    const navigate = useNavigate();

    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        const search = event.target.elements.q.value;
        if (!isNaN(search)) {
            let path = `pincode/${search}`;
            navigate(path);
        } else {
            let path = `search?q=${search}`;
             navigate(path);
        }
       

    }
   

    return (
        <Fragment>
            
            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                    <h1>Search Pin Code by Location</h1>
                    <div className="row"><p>Postal code of any location in India is just a single click away! Give it a try by yourself!</p></div>
                        <div className="row">&nbsp; </div>
                        <form className="form-inline" onSubmit={handleSubmit} >
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" size="50" onChange={setFormData} placeholder="Search Area / Postal Code" required />
                                <div className="input-group-btn">
                                    <button type="submit" className="btn btn-warning">Search</button>
                                </div>
                            </div>
                        </form>

                        <div className="text-center">
                            <p>&nbsp;</p>
                            OR
                            <p>&nbsp;</p>

                        </div>

                        <div >
                            <h3>
                                {['warning'].map((variant) => (
                                    <Alert key={variant} variant={variant}>
                                        <h2>State Wise Select Your State For Pin code  :</h2>
                                    </Alert>
                                ))}
                            </h3>
                            <SelectState />
                        </div>
                        <div className="row">&nbsp; </div>
                    </div>
                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default BodyForHome;