import React, { PureComponent } from 'react'
import IngredientList from '../IngredientList.js'
import Preperation from '../Preperation.js'
import 'bootstrap/dist/css/bootstrap.min.css'
/* import { Route } from 'react-router-dom' */
import axios from 'axios';


/* const RecipeData = (props) => {
    console.log("------------------------------------------------------------");
    console.log(props.location.aboutProps);
    return <h4>asdfsadf</h4>
} */

/* let recipe; */





export default class Recipe extends PureComponent {
    
    deleteRecipe () {
        axios.delete('https://recipeapp-spring-backend.herokuapp.com/recipe/' + this.state.recipe.uuid  ).then((response) => {
            window.location='/'
        })
    }

    

    state = {
        recipe: {}
    }

    

    

     componentWillMount(){
        axios.get('https://recipeapp-spring-backend.herokuapp.com/recipe/' + window.location.pathname.split("/").pop()).then((response) => {
            this.setState({recipe: response.data})
        });
    }



    render() {
        return (
            <div >
                <h2>{this.state.recipe.name}</h2>
                
                <IngredientList/>
                <Preperation/>

                <button className="btn btn-primary" type="submit" onClick={() => this.deleteRecipe()} >Delete</button>
            
            </div>
        )
    }
}
