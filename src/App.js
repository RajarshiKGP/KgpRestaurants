import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import Footer from './footer';
import MioAmore from './Mio_Amore';
import Heritage from './Heritage';
import SmartPind from './Smart_Pind';
import Amigos from './Amigos';
import Dreamland_Restaurant from './Dreamland_Restaurant';
import FoodCity from './Food_City';
import Subway from './Subway';
import Vegies from './Vegies';
import PFC from './PFC';
import MomoMania from './Momo_Mania';
import Sign from './sign';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className="Content">
          <Routes>
            <Route exact path="/KgpRestaurants" element={<Home />} />
            <Route exact path="/Mio_Amore" element={<MioAmore />} />
            <Route exact path="/Heritage" element={<Heritage />} />
            <Route exact path="/Smart_Pind" element={<SmartPind />} />
            <Route exact path="/Amigos" element={<Amigos />} />
            <Route exact path="/Dreamland_Restaurant" element={<Dreamland_Restaurant />} />
            <Route exact path="/Food_City" element={<FoodCity />} />
            <Route exact path="/Subway" element={<Subway />} />
            <Route exact path="/Vegies" element={<Vegies />} />
            <Route exact path="/PFC" element={<PFC />} />
            <Route exact path="/Momo_Mania" element={<MomoMania />} />
            <Route exact path="/sign" element={<Sign />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
