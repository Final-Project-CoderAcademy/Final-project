import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {

  return (
    <Router>
          <NavBar />
          <main className='py-3'>
            
          </main>
          <Footer />
    </Router>
  );
}

export default App;
