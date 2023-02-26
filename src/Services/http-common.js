import axios from "axios";
import {API_PATH , API_TOKEN } from './consta';

const devUrl =  axios.create({
    baseURL: API_PATH,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`
    }
  });

export default devUrl;




//https://api.postalpincode.in/pincode/283207
// https://api.postalpincode.in/postoffice/firozabad