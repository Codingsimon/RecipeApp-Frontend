import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipiecard from './Recipecard.js';
import Menu from './Menu.js';
import Recipe from './Recipe.js';
import Footer from './Footer.js';
import Styles from './style.css'
import ContentArea from './ContentArea.js'


function App() {
  return (
    <div className="App">
      <Menu />
      <ContentArea/>
      <Footer/>
    </div>
  );
}

export default App;
