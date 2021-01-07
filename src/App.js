import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './Menu.js';
import ContentArea from './ContentArea.js'
import Footer from './Footer'

function App() {



  return (
    <div className="App">
      <Menu />
      <ContentArea/>
      <Footer></Footer>
    </div>
  );
}

export default App;
