import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './components/carousel/Carousel';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 700) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  return (
    <>
      <div className="App">
        <Navbar mobile={mobile} />
        <Routes>
          <Route path="/home" element={<Home mobile={mobile} />} />
          <Route path="/carousel" element={<Carousel mobile={mobile} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
