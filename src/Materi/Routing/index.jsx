import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Client from './Client';
import Contact from './Contact';

const Routing = () => {
  return (
    <div className="main">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/*" element={<Service />} />
          <Route path="/client" element={<Client />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
