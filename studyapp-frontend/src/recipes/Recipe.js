import React, { PureComponent } from 'react'
import IngredientList from '../IngredientList.js'
import Preperation from '../Preperation.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Styles from '../style.css'
import Recipecards from './Recipecards.js'
import { Route } from 'react-router-dom'

const RecipeData = (props) => {
    console.log("------------------------------------------------------------");
    console.log(props.location.aboutProps);
    return <h4>asdfsadf</h4>
}

export default class Recipe extends PureComponent {

    render() {
        return (
            <div >
                <h2>{this.props.name}</h2>
                <Route component={RecipeData} />
                <IngredientList/>
                <Preperation/>
            </div>
        )
    }
}
