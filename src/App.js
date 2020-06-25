import React from 'react';
import './App.css';
import BootstrapNavbar from './components/BootstrapNavbar/BootstrapNavbar';
import BootstrapFooter from './components/BootstrapFooter/BootstrapFooter';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BootstrapNavbar></BootstrapNavbar>
      <BootstrapFooter></BootstrapFooter>
    </div>
  );
}

export default App;
