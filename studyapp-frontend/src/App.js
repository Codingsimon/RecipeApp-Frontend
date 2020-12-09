import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipiecards from './recipes/Recipecards.js';
import Menu from './Menu.js';
import Footer from './Footer.js';
import Styles from './style.css'
import ContentArea from './ContentArea.js'

import RecipeApi from "./api/RecipeApi"
import Recipe from "./model/Recipe"

function App() {



  return (
    <div className="App">

      <h1>  
      </h1>
      <Menu />
      <ContentArea/>
    </div>
  );
}

export default App;
