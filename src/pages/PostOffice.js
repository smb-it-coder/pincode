

import NavTop from '../components/nav/fixedTop';
import PostOfficeByPincode from '../components/PostOffice/postOffice';
import Footer from '../components/nav/footer';


//import { Helmet } from "react-helmet";

const PostOffice = () => {
  return (
    <div className="App">
       <NavTop />
       <PostOfficeByPincode/>
       <Footer />
    </div>
  );
};


export default PostOffice;