import NavTop from '../components/nav/fixedTop';
import AreaComponent from '../components/VillagePanchayats/area';
import DistrictComponent from '../components/VillagePanchayats/district';
import ChildComponent from '../components/VillagePanchayats/child';

import Footer from '../components/nav/footer';

const Area = () => {

  console.log('localStorage', localStorage);  //localStorage.getItem("mytime");

  const District = localStorage.getItem("district");
  const State = localStorage.getItem("state");
  const childId = localStorage.getItem("childId");
  console.log('Area > localStorage ', localStorage);
  
  if(State && !District) {
    return (
      <div className="App">
         <NavTop /> 
         <AreaComponent/>
         <Footer />
      </div>
    );
  } else if (State && District && !childId) {
    return (
      <div className="App">
         <NavTop /> 
         <DistrictComponent/>
         <Footer />
      </div>
    );
  } else if (State && District && childId) {
    return (
      <div className="App">
         <NavTop /> 
         <ChildComponent/>
         <Footer />
      </div>
    );
  }
 







};


export default Area;