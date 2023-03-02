
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