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
        handleIngredientChange(index, ingredientRef.current.state.value.value)

    }

    useEffect(() => {    
        handleIngredientChange(index, ingredientRef.current.state.value.value)

     }, []);

    return (

        <div>
            <Creatable 
                onChange={ingredientChange}
                options={options}
                defaultValue= {ingredientInput.selectedInput}
                ref = {ingredientRef}/>
               
                <button 
                    onClick={deleteIngredientInput}
                    className="btn btn-outline-secondary"
                    type="button">Delete</button>
        </div>

    )
}
