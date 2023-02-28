import NavTop from '../components/nav/fixedTop';
import AreaComponent from '../components/VillagePanchayats/area';
import Footer from '../components/nav/footer';

const Area = () => {

  ///console.log('localStorage', localStorage);  //localStorage.getItem("mytime");

  const District = localStorage.getItem("district");
  const State = localStorage.getItem("state");
  const childId = localStorage.getItem("childId");
  alert('area');
  

  console.log('Area > localStorage ', localStorage);

  return (
    <div className="App">
       <NavTop /> 
       <AreaComponent/>
       <Footer />
    </div>
  );

  
};


export default Area;