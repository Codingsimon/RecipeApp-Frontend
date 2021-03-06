import React, { PureComponent } from 'react'
import IngredientList from './IngredientList.js'
import Preperation from './Preperation.js'
import 'bootstrap/dist/css/bootstrap.min.css'
/* import { Route } from 'react-router-dom' */
import axios from 'axios';
import CategoryList from './CategoryList.js';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import DeleteButton from './DeleteButton.js';

/* const RecipeData = (props) => {
    console.log("------------------------------------------------------------");
    console.log(props.location.aboutProps);
    return <h4>asdfsadf</h4>
} */

/* let recipe; */





export default class Recipe extends PureComponent {

    state = {
        recipe: {},
        
    }
    

     componentDidMount(){
        axios.get('https://recipeapp-spring-backend.herokuapp.com/recipe/' + window.location.pathname.split("/").pop()).then((response) => {
            this.setState({recipe: response.data})
        });
        
    }

   

    render() {
        
        return (
            <div className="recipe">
                <h1 className="w-75">{this.state.recipe.name}</h1>
                <h3>{this.state.recipe.description}</h3>
                  
                <div className="container-fluid w-100 h-auto m-0 p-0">  
                    <img src={this.state.recipe.mainImageUrl} className="img-fluid w-75 h-auto p-0 m-0 rounded " alt=""/>           
                </div>

                <CategoryList categories={this.state.recipe.categories}/>
                <IngredientList className= 'mt-10 w-25' ingredients={this.state.recipe.ingredients}/>
                <Preperation className= 'mt-3' steps = {this.state.recipe.steps}/>
                
                <h3 className= 'mt-3'>Notiz</h3>
                <div>{this.state.recipe.notes}</div>
                <h3 className= 'mt-3'>Schwierigkeit</h3>
                <div>{this.state.recipe.difficulty}</div>

                <div>
       
          
        </div>

                <DeleteButton recipe={this.state.recipe.uuid}/>
            </div>
        )
    }
}
