import http from "./http-common";



export default async function pincodeFindById(id) {

  if (id) {
    try {
      const res = await http.get(`/pincode/${id}`);
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
