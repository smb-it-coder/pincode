import NavTop from '../components/nav/fixedTop';
import ChildComponent from '../components/VillagePanchayats/child';
import Footer from '../components/nav/footer';

const Child = () => {

  ///console.log('localStorage', localStorage);  //localStorage.getItem("mytime");

  const District = localStorage.getItem("district");
  const State = localStorage.getItem("state");
  const childId = localStorage.getItem("childId");
 // alert('area');
  console.log('Child > localStorage ', localStorage);
 
 
  return (
    <div className="App">
       <NavTop /> 
       <ChildComponent/>
       <Footer />
    </div>
  );







};


export default Child;