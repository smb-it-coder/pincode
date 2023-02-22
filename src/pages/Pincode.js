
import NavTop from '../components/nav/fixedTop';
import Footer from '../components/nav/footer';
import Location from '../components/Location/location';
//import ReadSearch from '../components/Pincode/ReadSearch';
import { Helmet } from "react-helmet";

const Search = () => {
  return (
    <div className="App">
      <NavTop />
      <div>
        <Helmet>
  
            <title>Search Pin Code - PinCode.in</title>
        </Helmet>
       
    </div>
      <Location />
      <br/>
      <Footer />
    </div>
  );
};


export default Search;