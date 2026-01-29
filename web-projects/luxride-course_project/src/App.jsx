import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Cars from './pages/Cars';
import Boats from './pages/Boats';
import Jets from './pages/Jets'; // <-- Import Jets
import Contact from './pages/Contact';
import Registration from './pages/Registration';

function App() {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/boats" element={<Boats />} />
          <Route path="/jets" element={<Jets />} /> {/* <-- Add Route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;