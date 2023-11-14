import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './components/HomePage';
import RecipePage from './components/RecipePage';
import CreatePage from './components/CreatePage';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
