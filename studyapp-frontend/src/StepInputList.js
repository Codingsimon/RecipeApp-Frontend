import React, {useState} from 'react'
import StepInput from "./StepInput"

export default function StepInputList({stepInputs, deleteStepInput}) {
            return (
                stepInputs.map(function(stepInput, index) {
                    console.log("in List: " + stepInput.name + index)
                        return <StepInput key = {stepInput.id} stepInput = {stepInput} index = {index} deleteStepInput = {deleteStepInput}/>
                }) 
         )
}
