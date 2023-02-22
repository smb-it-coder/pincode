import http from "./http-common";

export default async function getPincodeDataByCity(city) {

  if (city) {
    try {
      const res = await http.get(`/postoffice/${city}`);

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
  return [];              
}
