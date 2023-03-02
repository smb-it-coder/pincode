

import NavTop from '../components/nav/fixedTop';
import PostOfficeByPincode from '../components/PostOffice/postOffice';
import Pincodebreadcrum from '../components/breadcrum/pincodebreadcrum';
import Footer from '../components/nav/footer';


//import { Helmet } from "react-helmet";

const PostOffice = () => {
  return (
    <div className="App">
       <NavTop />
       <Pincodebreadcrum />
       <PostOfficeByPincode/>
       <Footer />
    </div>
  );
};


export default PostOffice;