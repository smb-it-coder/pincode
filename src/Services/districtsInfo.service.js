import http from "./http-common";

export default async function districtsInfo(district) {

  try {

    if (district) {
      const res = await http.get(`/state-district/${district}`);
      const ROWS = res.data.data;
      const result = {
        data: ROWS,
        count: ROWS.length?ROWS.length:0,
        status: res.status?res.status:404
      };
  
      return result;
    } else {
      return  {
        data: [],
        status: 404,
      };

    }
   

  } catch (err) {
    const error = {
      data: [],
      status: 404,
    };

    return error;
  }


}
