import axios from "axios";

const devUrl =  axios.create({
    baseURL: "https://api.postalpincode.in/",
    headers: {
      "Content-type": "application/json"
    }
  });

export default devUrl;




//https://api.postalpincode.in/pincode/283207
// https://api.postalpincode.in/postoffice/firozabad