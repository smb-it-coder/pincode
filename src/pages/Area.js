import NavTop from '../components/nav/fixedTop';
import AreaComponent from '../components/VillagePanchayats/area';
import DistrictComponent from '../components/VillagePanchayats/district';
import Footer from '../components/nav/footer';

const Area = () => {

  console.log('localStorage', localStorage);  //localStorage.getItem("mytime");

  const District = localStorage.getItem("district");
  const State = localStorage.getItem("state");
  
  if(State && !District) {
    return (
      <div className="App">
         <NavTop /> 
         <AreaComponent/>
         <Footer />
      </div>
    );
  } else if (State && District) {
    return (
      <div className="App">
         <NavTop /> 
         <DistrictComponent/>
         <Footer />
      </div>
    );
  }
 







};


export default Area;