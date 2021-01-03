import React, {useState} from 'react'
import IngredientInput from "./IngredientInput"

export default function IngredientInptuList({ingredientInputs, handleDeleteIngredientInput, handleIngredientChange, options}) {
    return(ingredientInputs.map((ingredientInput, i) => {
        console.log("sel2", ingredientInput)
        return <IngredientInput key={
                ingredientInput.id
            }
            ingredientInput={ingredientInput}
            handleDeleteIngredientInput={handleDeleteIngredientInput}
            handleIngredientChange={handleIngredientChange}
            options={options}
            index={i}/>
    }))
}
