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


    state = {
        recipe: null
    }

    

     componentWillMount(){
        axios.get('https://recipeapp-spring-backend.herokuapp.com/recipe/' + window.location.pathname.split("/").pop()).then((response) => {
            this.setState({recipe: response.data.name})
        });
    }



    render() {
        return (
            <div >
                <h2>{this.state.recipe}</h2>
                
               {/*  <Route component={RecipeData} /> */}
                <IngredientList/>
                <Preperation/>
            </div>
        )
    }
}
