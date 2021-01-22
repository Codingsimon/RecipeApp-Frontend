import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import UnitOptions from '../model/UnitOptions'

let deleteKey
let portionAmount;

export default class IngredientList extends PureComponent {
    
    constructor(props) {
        super(props)
        this.state = {
            portions: 1
        }
        this.setPortions=this.setPortions.bind(this)
        this.validatePortion=this.validatePortion.bind(this)
        this.checkForUndefined = this.checkForUndefined.bind(this)
        this.portionRef = React.createRef();
        
    }

    setPortions(e) {
        this.setState({
            portions: e.target.value
        })
    }

    pnf(newVal) {
        this.setState({portions : newVal})
    }

    getUnit(ingredient){
        return UnitOptions.options.filter(option => option.value === ingredient.unit)[0].label 
    }

    validatePortion(e) {
        if(e.target.value || deleteKey ) {
            deleteKey = false
            let actualValue = e.target.value>99? parseInt(e.target.value/10)  : e.target.value
            this.pnf(actualValue)
            this.portionRef.current.value =  actualValue
            portionAmount = actualValue
        } else {
            this.pnf(portionAmount)
            this.portionRef.current.value =  portionAmount
        } 
    }

    deleteKeyPressed(){
        deleteKey = true;
    }

    checkForUndefined(){
        if(this.state.portions===undefined || this.state.portions===""  ) {
            this.pnf(1)
            this.portionRef.current.value = 1
            portionAmount = 1
        }
    }



    render() {
        if(this.props.ingredients) {
            return (
                <div className="ingredientList w-50">
                    <h3 >Zutaten</h3>  
                    
                    {this.props.ingredients.map(ingredient => {
                    return <span className = "d-flex">
                        <div className="mr-2">{ingredient.amount? ingredient.amount*this.state.portions : null}</div>
                        <div className="mr-2">{ingredient.unit? this.getUnit(ingredient) : null}</div>
                        <div>{ingredient.name}</div>
                    
                    </span>
                    })}

                    <div className="portions">
                        <h4 >Portionen</h4>  

                        <input type="number" min="1" max="99" ref={this.portionRef} defaultValue="1"   className="form-control" onKeyDown={ (evt) => (evt.key === 'Backspace' || evt.key === 'Delete') && this.deleteKeyPressed(evt.key)} onInput={ this.validatePortion} onBlur={this.checkForUndefined} />

                        
                    </div>

                </div>
            )
        }
        return null
    }   
}
