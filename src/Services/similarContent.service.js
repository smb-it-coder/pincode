import http from "./http-common";



export default async function other(state , dist, village) {

  if (state) {
    try {
      const res = await http.get(`/${state}/${dist}/${village}`);
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
