import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './components/home/carousel/Carousel';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 900) {
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
          <Route path="/" element={<Home mobile={mobile} />} />
          {/* <Route path="/custom" element={<Custom mobile={mobile} />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
