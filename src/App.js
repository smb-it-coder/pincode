import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import State from './pages/State'
import PostOffice from './pages/PostOffice';
import Pincode from './pages/Pincode';
import Village from './pages/Village';
import Area from './pages/Area';

function App() {
  const  v1="/pincode-";
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/' element={<Search />} />
        <Route path='/state/:state' element={<State />} />
        <Route path='/pincodes/:location' element={<Pincode />} />
        <Route path='/state/:district/:block/:area/' element={<Village />} />
        <Route path='/pincode/:pincode' element={<PostOffice />} />
        <Route path='/pincode/:pincode' element={<PostOffice />} />
        <Route path='/:area' element={<Area />} />
        
      </Routes>
    </BrowserRouter>
  );
// vpath -> pilakhtarjait

//  villages/Firozabad/Ekah/Nagla-Jagannath
// pilakhtarfateh-jasrana-firozabad-uttar-pradesh-283207
  
}

export default App;
