import React, {useState} from 'react'
import IngredientInput from "./IngredientInput"

export default function IngredientInptuList({
    ingredientInputs,
    handleDeleteIngredientInput,
    handleIngredientChange,
    options
}) {
    return(ingredientInputs.map((ingredientInput,i)  => {
        return <IngredientInput key={
                ingredientInput.id}
            ingredientInput={ingredientInput}
            handleDeleteIngredientInput={handleDeleteIngredientInput}
            handleIngredientChange={handleIngredientChange}
            options = {options}
            index = {i}/>
    }))
}
