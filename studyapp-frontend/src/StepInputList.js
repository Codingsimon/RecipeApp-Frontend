import React, {useState} from 'react'
import StepInput from "./StepInput"

export default function StepInputList({stepInputs, deleteStepInput}) {
    console.log(stepInputs)
            return (
                stepInputs.map(function(stepInput, index) {
                    console.log(index)
                        return <StepInput key = {stepInput.id} stepInput = {stepInput} index = {index} deleteStepInput = {deleteStepInput}/>
                }) 
         )
}
