import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import About from './components/About';
import GrapicDesigns from './GrapicDesigns';
import MotionGraphics from './MotionGraphics';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="max-w-[1300px] w-[95%] m-auto bg-white shadow-lg my-4 rounded-xl overflow-hidden ">
        <Navbar />
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/graphic-designs" element={<GrapicDesigns />} />
              <Route path="/motion-graphics" element={<MotionGraphics />} />
            </Routes>
          </div>
        </Router>
      </div>
      <div className="max-w-[1300px] w-[95%] m-auto text-white  my-4 rounded-xl overflow-hidden ">
        <Footer />
      </div>
    </>
  );
}

export default App;
