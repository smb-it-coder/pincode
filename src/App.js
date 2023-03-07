import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import State from './pages/State'
import PostOffice from './pages/PostOffice';
import Pincode from './pages/Pincode';
import Village from './pages/Village';
import Area from './pages/Area';
//import District from './pages/District';
import Child from './pages/Child';
import About from './pages/About';
import Notfound from './pages/404';

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/' element={<Search />} />
        
        <Route path='/pincodes/:location' element={<Pincode />} />
        <Route path='/state/:district/:block/:area/' element={<Village />} />
        <Route path='/pincode/:pincode' element={<PostOffice />} />
        <Route path='/state/:state' element={<State />} />
        <Route path='/:state/:area' element={<Area />} />
        <Route path='/pin-code/:area' element={<Child />} />
        <Route path='/about' element={<About/>} />
        <Route path='/404' element={<Notfound/>} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
