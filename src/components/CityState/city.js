import React, { useState, useReducer, Fragment } from 'react';
import { Helmet } from "react-helmet";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link, useParams, useNavigate } from 'react-router-dom';
import CreatableSelect from 'react-select/creatable';

import SelectState from '../util/SelectState';
import GetCityOption from '../../Services/cities';
import * as __CONSTA from '../../Services/consta';
import Table from 'react-bootstrap/Table';




function CityState() {

    let { state } = useParams();
    const stateName = (state.replaceAll(/-pincode/ig, "")).replaceAll(/-/ig, " ");
    const cityOption = GetCityOption(stateName);
    const navigate = useNavigate();

    const handleChange = (selected) => {
        let city = (selected.value.replaceAll(/ /ig, "-"));
        let cstate = stateName.replaceAll(/ /ig, "-");
        let path = `/pincodes/${city}-Pincode-Found-In-${cstate}`;
        // alert(path);
        navigate(path);

    };

    return (
        <Fragment>
            <Helmet>
                <title>   Delhi Pin Code, Delhi Post Office Postal Codes | {__CONSTA.NAMESPACE} </title>
            </Helmet>
            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active> {stateName} </Breadcrumb.Item>
                            </Breadcrumb>
                            <hr />
                        </div>
                        <h1>{stateName} Pincode</h1>
                        <div className="row">&nbsp;</div>

                        <div className="row">
                            <p>Browse pin code of Goa in India. Goa (GA) has a number of 258 post offices situated in 2 districts.</p>
                        </div>





                        <div className="row">
                            <form className="form-inline">

                                <div className="col-sm-6">
                                    <SelectState />
                                </div>
                                <div className="col-sm-6">
                                    &nbsp;
                                </div>
                                <div className="col-sm-6">
                                    <CreatableSelect isClearable options={cityOption}
                                        onChange={handleChange}

                                        placeholder={"Search City name here!"} />
                                </div>

                            </form>
                        </div>

                        <div className="row">&nbsp;</div>


                        <div className="row">
                            <h2>District-wise Goa postal pincode.</h2>



                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>District</th>
                                            <th>Number of Postoffices</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {cityOption.map((city) => (
                                            <tr key={city.value} >
                                                <td>{city.value}</td>
                                                <td>
                                                    {city.label}
                                                </td>


                                            </tr>
                                        ))
                                        }

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default CityState;