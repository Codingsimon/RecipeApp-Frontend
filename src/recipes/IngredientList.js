import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class IngredientList extends PureComponent {


    render() {

        if(this.props.ingredients) {
            return (
                <div>
                <h3 className = 'mb-0'>Zutaten</h3>  
                {this.props.ingredients.map(ingredient => {
                   return <div>{ingredient.name}</div>
                })}
            </div>
            )
        }
        return null
    }   
}
