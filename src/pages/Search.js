
import NavTop from '../components/nav/fixedTop';
import Footer from '../components/nav/footer';
import DataForPincode from '../components/Pincode/pincode';
//import ReadSearch from '../components/Pincode/ReadSearch';
import Searchbreadcrum from '../components/breadcrum/searchbreadcrum';
import { Helmet } from "react-helmet";

const Search = () => {
  return (
    <div className="App">
      <NavTop />
      <Searchbreadcrum/>
      <div>
        <Helmet>
            <title>Search Pin Code - PinCode.in</title>
        </Helmet>
       
    </div>
      <DataForPincode/>
      <br/>
      <Footer />
    </div>
  );
};


export default Search;