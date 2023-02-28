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
        <Route path='/:area' element={<Area />} />
        <Route path='/v/:area' element={<Child />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
