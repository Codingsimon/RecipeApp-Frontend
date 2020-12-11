import React, { PureComponent } from 'react'
import IngredientList from './IngredientList.js'
import Preperation from './Preperation.js'
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

    

    

     componentDidMount(){
        axios.get('https://recipeapp-spring-backend.herokuapp.com/recipe/' + window.location.pathname.split("/").pop()).then((response) => {
            this.setState({recipe: response.data})
        });
    }



    render() {
        console.log(this.state.recipe)
        return (
            <div >
                <h1>{this.state.recipe.name}</h1>
                <h3>{this.state.recipe.description}</h3>


                <div>
                {() => {if(this.state.recipe.categories) { 
                     <div>Kategorie: {this.state.recipe.categories[0].name}</div>
                }}}
                </div>
                
                
                <div class="container-fluid w-100 h-auto m-0 p-0">  
                    <img src={this.state.recipe.mainImageUrl} class="img-fluid w-100 h-auto p-0 m-0" alt="Patience"/>           
                </div> 
                <IngredientList className= 'mt-10' ingredients={this.state.recipe.ingredients}/>
                <Preperation className= 'mt-3' steps = {this.state.recipe.steps}/>
                <h3 className= 'mt-3'>Notiz</h3>
                <div>{this.state.recipe.notes}</div>

                <button className="btn btn-primary mt-3" type="submit" onClick={() => this.deleteRecipe()} >Delete</button>
            </div>
        )
    }
}
