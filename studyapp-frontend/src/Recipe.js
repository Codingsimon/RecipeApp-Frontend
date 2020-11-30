import React, { PureComponent } from 'react'
import IngredientList from './IngredientList.js'
import Preperation from './Preperation.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Styles from './style.css'
import Recipecard from './Recipecard.js'

export default class Recipe extends PureComponent {
    render() {
        return (
            <div >
                <Recipecard/>
                <IngredientList/>
                <Preperation/>
            </div>
        )
    }
}
