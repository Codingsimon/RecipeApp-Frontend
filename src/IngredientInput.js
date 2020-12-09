import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Creatable from 'react-select/creatable';

export default function IngredientInput({
    ingredientInput,
    deleteIngredientInput,
    handleIngredientChange,
    selectedIngredient,
    options
}) {


    function handleDeleteIngredientInput() {
        deleteIngredientInput(ingredientInput.id)
    }
    console.log("SelectedIngredient: " + selectedIngredient)

    return (


        <div>
            <Creatable 
                onChange={handleIngredientChange}
                options={options}
                defaultInputValue={ingredientInput.name}/>
                <button 
                    onClick={handleDeleteIngredientInput}
                    class="btn btn-outline-secondary"
                    type="button">Delete</button>
        </div>

    )
}
