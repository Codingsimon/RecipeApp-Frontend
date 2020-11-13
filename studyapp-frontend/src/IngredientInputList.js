import React, {useState} from 'react'
import IngredientInput from "./IngredientInput"

export default function IngredientInptuList({
    ingredientInputs,
    deleteIngredientInput,
    handleIngredientChange,
    options
}) {
    return(ingredientInputs.map(function (ingredientInput) {
        return <IngredientInput key={
                ingredientInput.id
            }
            ingredientInput={ingredientInput}
            deleteIngredientInput={deleteIngredientInput}
            handleIngredientChange={handleIngredientChange}
            options = {options}/>
    }))
}
