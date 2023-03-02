import NavTop from '../components/nav/fixedTop';
import Sbreadcrum from '../components/breadcrum/sbreadcrum';
import CityState  from '../components/CityState/city';
import Footer from '../components/nav/footer';

const State = () => {
  console.log(' LEVEL 1 ', localStorage);
  return (
    <div className="App">
       <NavTop />
       <Sbreadcrum />
       <CityState/>
       <Footer />
    </div>
  );
};


export default State;