import React, {useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Creatable from 'react-select/creatable';

export default function IngredientInput({ingredientInput, index, handleDeleteIngredientInput, handleIngredientChange, options
}) {

    const ingredientRef = useRef()

    function deleteIngredientInput() {
        handleDeleteIngredientInput(ingredientInput.id, index)
    }

    function ingredientChange() {
        console.log(ingredientRef)
        handleIngredientChange(index, ingredientRef.current.state.value.value)

    }

    useEffect(() => {    
        console.log("ing loaded")
        console.log(ingredientInput.name)
        handleIngredientChange(index, valueA.name)
        console.log(valueA.name)
     }, []);

     const valueA = ingredientInput.selectedInput
    return (

        <div>
            <Creatable 
                onChange={ingredientChange}
                options={options}
                defaultValue= {valueA}
                ref = {ingredientRef}/>
               
                <button 
                    onClick={deleteIngredientInput}
                    className="btn btn-outline-secondary"
                    type="button">Delete</button>
        </div>

    )
}
