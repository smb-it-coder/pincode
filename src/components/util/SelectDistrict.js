import React from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import GetCityState from '../../Services/cities';

const getCityByState =  function SelectDistrict(state) {


const cityList =  GetCityState(state);

console.log('state', state);
console.log('cityList', cityList);

  const navigate = useNavigate();
  const [selectValue, setSelectValue] = React.useState("");
  const onChangeCity = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    let path =  `${value}-pincode`
   // navigate(path);
  };



}

export default getCityByState;