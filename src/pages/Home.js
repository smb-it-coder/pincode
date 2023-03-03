
import NavTop from '../components/nav/fixedTop';
import Hbreadcrum from '../components/breadcrum/hbreadcrum';
import Footer from '../components/nav/footer';
import BodyForHome from '../components/Home/home';
import TwoDigitPincodeBelongsToState from '../components/util/twoDigitPincodeBelongsToState';
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Home page title by me.</title>
      </Helmet>
      <NavTop />
      <Hbreadcrum />
      <BodyForHome />

      <div className="container-fluid bg-grey">
      <div className="row"></div>
        <div className="row">
          <div className="col-sm-2">
            <span className="glyphicon glyphicon-globe logo slideanim"></span>
          </div>
          <div className="col-sm-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis quis massa sit amet feugiat. Integer ac nibh id justo laoreet rhoncus. Sed massa elit, pellentesque in hendrerit eu, varius ac lorem. Aliquam sed tincidunt nulla. Quisque nec metus lectus. Fusce magna nibh, dictum et commodo in, sollicitudin non urna. Duis vehicula quam ac velit tempus pharetra.</p>
            </div>
          <div className="col-sm-2">
            <span className="glyphicon glyphicon-globe logo slideanim"></span>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-grey">
        <div className="row">
          <div className="col-sm-2"><span className="glyphicon glyphicon-globe logo slideanim"></span> </div>
          <div className="col-sm-8">
            <h3>First Two Digit of the Postal Codes belongs to:</h3>
            <TwoDigitPincodeBelongsToState />
            <div className="row"> &nbsp;&nbsp;</div>
            <div className="row"> 

                          <h2>India Pin code FAQs</h2>
                           <h3>What is pin code?</h3>
                           <p>PIN code means Postal Index Number which is a 6 digit code used by Indian Government in postal code system.</p>

                           <h3>Q: What is the pin code of my location?</h3>
                           <p>Ans: You can find your location pin code here. Search your state or district and then select your location. 
                            You will find your location pin code</p>

                            <h3>Q: How many post offices are there in India</h3>
                           <p>Ans: There are 1,56,434 post offices functioning in India including rural areas. </p>
                           <h3>Q: What is the meaning of 6 digit in postal code?</h3>
                           <p>Ans: India pin code has 6 digits. First digit ranges from 1 to 9 and represents for postal zone. 
                            Second digit represents for Sub regions and 3 digit is for district. The combination of third and fourth digits are for state’s 
                            location sorting district. The 5th and 6th digit denote a post office.</p>

                           <h3>Q: When did PIN code system started in India?</h3>
                           <p>Ans: PIN code system was first introduced in India on August 15, 1972 by Shriram Bhikaji Velankar.</p>



                         </div>
          </div>
          <div className="col-sm-2"> <span className="glyphicon glyphicon-globe logo slideanim"></span> </div>
        </div>
       
      </div>
      <br/>
      <Footer />
    </div>
  );
};






export default Home;