import http from "./http-common";



export default async function getPincodeByLocation(location) {

  if (location) {
    try {
      const res = await http.get(`/location/${location}`);
      //console.log('res.data==> ', res.data);  
      ///console.log('res.status', res.status);  
      const ROWS = res.data.pincode;
      const result = {
        data: ROWS,
        count: ROWS.length?ROWS.length:0,
        status: res.status?res.status:404
      };

      return result;

    } catch (err) {
      const error = {
        data: [],
        status: 404,
      };

      return error;
    }
  }
}
