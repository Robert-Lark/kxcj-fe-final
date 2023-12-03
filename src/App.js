import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ListenNow from './ListenNow'
import Donate from './Donate'
import GetInvolved from './GetInvolved';
import BecomeADj from './BecomeADJ';
import SubmitPSA from './SubmitPSA';
import Volunteer from './Volunteer';
import Shop from './Shop';
import Supporters from './Supporters';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listennow" element={<ListenNow />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/become-a-dj" element={<BecomeADj />} />
        <Route path="/submit-psa" element={<SubmitPSA />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/supporters" element={<Supporters />} />
      </Routes>
    </Router>
  );
};

export default App;