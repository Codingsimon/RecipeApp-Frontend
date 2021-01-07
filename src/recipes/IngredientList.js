import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class IngredientList extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            portions: 1
        }
        this.setPortions=this.setPortions.bind(this)
    }

    setPortions(e) {
        this.setState({
            portions: e.target.value
        })
    }

    render() {
        console.log("portions", this.portions)
        if(this.props.ingredients) {
            return (
                <div className="ingredientList">
                    <h3 >Zutaten</h3>  
                    
                    {this.props.ingredients.map(ingredient => {
                    return <span className = "d-flex">
                        <div className="mr-2">{ingredient.amount? ingredient.amount*this.state.portions : null}</div>
                        <div className="mr-2">{ingredient.unit? ingredient.unit : null}</div>
                        <div>{ingredient.name}</div>
                    
                    </span>
                    })}

                    <div className="portions">
                        <h4 >Portionen</h4>  
                        <input
                            value={this.state.portions}
                            onChange = {this.setPortions}
                            type="number"
                            className="form-control w-25"
                        />
                    </div>

                </div>
            )
        }
        return null
    }   
}
