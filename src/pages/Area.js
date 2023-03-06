import NavTop from '../components/nav/fixedTop';
import Abreadcrum from '../components/breadcrum/abreadcrum';
import AreaDistricts from '../components/VillagePanchayats/area';
import Footer from '../components/nav/footer';

const Area = () => {

  ///console.log('localStorage', localStorage);  //localStorage.getItem("mytime");

  //const District = localStorage.getItem("district");
  //const State = localStorage.getItem("state");
  //const childId = localStorage.getItem("childId");

  console.log(' LEVEL 2 ', localStorage);

  return (
    <div className="App">
       <NavTop /> 
       <Abreadcrum />
       <AreaDistricts/>
       <Footer />
    </div>
  );

  
};


export default Area;