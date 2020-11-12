import React, { PureComponent } from 'react'
import Titlecard from './Titlecard.js'
import IngredientList from './IngredientList.js'
import Preperation from './Preperation.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Styles from './style.css'

export default class Recipe extends PureComponent {
    render() {
        return (
            <div >
                <Titlecard/>
                <IngredientList/>
                <Preperation/>
            </div>
        )
    }
}
