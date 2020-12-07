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
componentDidMount(){
    axios.get('https://recipeapp-spring-backend.herokuapp.com/recipe').then((response) => {
        this.setState({recipes: response.data})
        console.log(response.data)
        console.log("test")
    });
}

export default class Recipe extends PureComponent {
    render() {
        
        console.log("test")
        axios.get('https://recipeapp-spring-backend.herokuapp.com/recipe').then((response) => {
            console.log(response.data)
            test =10
            console.log("zeas")
        });
        console.log(test)
        
        return (
            <div >
                <h2>{this.props.name}</h2>
                
               {/*  <Route component={RecipeData} /> */}
                <IngredientList/>
                <Preperation/>
            </div>
        )
    }
}
