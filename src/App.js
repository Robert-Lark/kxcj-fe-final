import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import ListenNowPage from './ListenNow'
import DonatePage from './Donate'
import GetInvolvedPage from './GetInvolved';
import BecomeADjPage from './BecomeADJ';
import SubmitPSAPage from './SubmitPSA';
import VolunteerPage from './Volunteer';
import ShopPage from './Shop';
import SupportersPage from './Supporters';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listen-now" element={<ListenNowPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/become-a-dj" element={<BecomeADjPage />} />
        <Route path="/submit-psa" element={<SubmitPSAPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/supporters" element={<SupportersPage />} />
      </Routes>
    </Router>
  );
};

export default App;