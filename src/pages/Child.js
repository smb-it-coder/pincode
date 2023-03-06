import NavTop from '../components/nav/fixedTop';
import Vbreadcrum from '../components/breadcrum/vbreadcrum';
import Place from '../components/VillagePanchayats/place';
import Footer from '../components/nav/footer';

const Child = () => {
  console.log(' LEVEL 3 here', localStorage);
 
 
  return (
    <div className="App">
       <NavTop /> 
       <Vbreadcrum/>
       <Place/>
       <Footer />
    </div>
  );







};


export default Child;