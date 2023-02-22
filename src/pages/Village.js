

import NavTop from '../components/nav/fixedTop';
import VillagePanchayats from '../components/VillagePanchayats/village';
import Footer from '../components/nav/footer';


//import { Helmet } from "react-helmet";

const Village = () => {
  return (
    <div className="App">
       <NavTop />
       <VillagePanchayats/>
       <Footer />
    </div>
  );
};


export default Village;