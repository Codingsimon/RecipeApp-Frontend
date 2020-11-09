import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipiecard from './Recipecard.js';
import Menu from './Menu.js';
import Recipe from './Recipe.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      
      <Menu />
      <Recipiecard />
      <Recipe/>
      <Footer/>
    </div>
  );
}

export default App;
