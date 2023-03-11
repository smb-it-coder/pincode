
import NavTop from '../components/nav/fixedTop';
import Hbreadcrum from '../components/breadcrum/hbreadcrum';
import Footer from '../components/nav/footer';
import BodyForHome from '../components/Home/home';
import TwoDigitPincodeBelongsToState from '../components/util/twoDigitPincodeBelongsToState';
import { Helmet } from "react-helmet";

const Home = () => {

  const URL = window.location.href;

  return (
    <div className="App">
      <Helmet>
      <title>Location PIN Code | India Pincode Number | Search My Pincode </title>
      <meta name="description" content={`Find PIN code and post office details for any location, area, village, city, district or state in India at SearchMyPincode.`} />
      <meta name="keywords" content={`My location pincode, area pincode, city pin code, pin code search, my pin code, pin code India, pin code of my current location, India postal index number, 6 digit pin code`}  />
      <link href={`${URL}`} rel="canonical" />
      <meta http-equiv="Content-Language" content="English" />           
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
          <div className="row">
                            <p> India is a very large country in term of population as well as area. It is very difficult to remember PIN code of any location, city or village. To make this task easy, we have created PIN code search engine very user friendly. Anyone can search Pincode by State, District, city or village as well as location address by Pin code. It does not matter where are you live in, either you are from Jammu or Kanyakumari, you can find your PIN code in just one or two clicks. </p>
                        </div>
                        <h2>Postal Index Number</h2>
                        <div className="row">
                            <p>Whenever you want to send a parcel or a gift on an occasion of festival, via Indian post or private courier like Bluedart or DTDC, you must know full address and Pincode of recipient. In order to make this process easy, Indian postal system uses 6 digits postal code to locate accurate route of recipient.
                                Following image is showing the meaning of each digit in Indian Pin Code.</p>
                            <p> <img alt="" src='/pincode.png' responsive  style={{height:"87%"}} /> </p>
                            <p> As you can see, first and second digit represents for region and sub region respectively. Third digit is for shorting district and last 3 digits represent for post offices.</p>
                            <p>&nbsp;</p>
                        </div>
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