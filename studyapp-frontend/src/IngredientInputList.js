import React, {useState} from 'react'
import IngredientInput from "./IngredientInput"

export default function IngredientInputList({ingredientInputs}) {
            return (
                ingredientInputs.map(function(ingredientInput, index) {
                    console.log(index)
                        return <IngredientInput key = {ingredientInput.id} ingredientInput = {ingredientInput} index = {index}/>
                }) 
         )
}
