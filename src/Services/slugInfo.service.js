import http from "./http-common";

export default async function slugInfo() {
return [];
  //let slug = await pageSlug(46);

  //return slug ;


}


const pageSlug = async function onePage(page){
  try {

    if (page) {
      const res = await http.get(`/slug?page=${page}`);
      const SLUG = res.data.slug;

      console.log('pageSlug -> SLUG', SLUG);
      const toXml = (data) => {
        return data.reduce((result, el) => {
         return result + `<url><loc>http://searchmypincode.in/pin-code/${el.slug}</loc>
         <priority>0.9</priority>
         </url>\n`
        }, '')
      }

     const FINALXML =  `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${toXml(SLUG)}
      </urlset>`;


      //const fs = require('fs');
    

      console.log('pageSlug -> FINALXML  ',FINALXML);
     // const ROWS = res.data.slug;

     
  
     // return result;
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
