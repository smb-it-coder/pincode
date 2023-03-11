import http from "./http-common";



export default async function getCityByState(state) {

  if (state) {
    try {
      const res = await http.get(`/districts/${state}`);
      const ROWS = res.data.data;
      const result = {
        data: ROWS,
        count: ROWS.length?ROWS.length:0,
        status: res.status?res.status:404
      };

      if(result.status === 404) {
        window.location = '/404';
      }

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
