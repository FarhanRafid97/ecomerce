import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'swiper/css/bundle';

import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import MenProduct from './components/product/Men/MenProduct';

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
        {/* <Navbar mobile={mobile} /> */}
        <Routes>
          <Route path="/" element={<Home mobile={mobile} />} />
          {/* <Route path="/" element={<MenProduct mobile={mobile} />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
