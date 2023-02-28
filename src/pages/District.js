import NavTop from '../components/nav/fixedTop';
import DistrictComponent from '../components/VillagePanchayats/district';
import Footer from '../components/nav/footer';

const District = () => {

  ///console.log('localStorage', localStorage);  //localStorage.getItem("mytime");

  const District = localStorage.getItem("district");
  const State = localStorage.getItem("state");
  const childId = localStorage.getItem("childId");
  alert('District');
  

  console.log('District > localStorage ', localStorage);
    return (
      <div className="App">
         <NavTop /> 
         <DistrictComponent/>
         <Footer />
      </div>
    );


};


export default District;