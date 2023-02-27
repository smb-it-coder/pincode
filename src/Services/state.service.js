import http from "./http-common";



export default async function getCityByState(state) {

  if (state) {
    try {
      const res = await http.get(`/get-state/${state}`);
      const ROWS = res.data.state;
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
