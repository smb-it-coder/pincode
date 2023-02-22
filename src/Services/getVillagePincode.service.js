import http from "./http-common";

export default async function getVillagePincode(village) {

  if (village) {
    try {
      const res = await http.get(`/postoffice/${village}`);

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
