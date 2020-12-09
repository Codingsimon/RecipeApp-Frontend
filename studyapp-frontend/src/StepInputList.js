import React, {useRef} from 'react'
import StepInput from "./StepInput"

export default function StepInputList({stepInputs, deleteStepInput, stepChange}) {
   
            return (
                stepInputs.map(function(stepInput, i) {
                        return <StepInput key = {stepInput.id}
                         stepInput = {stepInput} 
                         index = {i} 
                         deleteStepInput = {deleteStepInput}
                         stepChange = {stepChange}/>
                }) 
         )
}
