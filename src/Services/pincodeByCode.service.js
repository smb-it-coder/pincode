import http from "./http-common";



export default async function getPincodeDataByCode(pincode) {

  if (pincode) {
    try {
      const res = await http.get(`/pincode/${pincode}`);

      const result = {
        data: res.data,
        status: res.status
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
