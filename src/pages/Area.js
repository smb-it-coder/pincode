

import NavTop from '../components/nav/fixedTop';
import AreaComponent from '../components/VillagePanchayats/area';
import Footer from '../components/nav/footer';


//import { Helmet } from "react-helmet";

const Area = () => {
  return (
    <div className="App">
       <NavTop /> 
       <AreaComponent/>
       <Footer />
    </div>
  );
};


export default Area;