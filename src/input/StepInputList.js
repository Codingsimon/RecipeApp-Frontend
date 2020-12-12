import React, {useRef} from 'react'
import StepInput from "./StepInput"

export default function StepInputList({stepInputs, handleDeleteStepInput, handleStepChange}) {
            console.log("inputs in list")
            console.log(stepInputs)
            return (
                stepInputs.map( (stepInput, i) => {
                        return <StepInput key = {stepInput.id}
                         stepInput = {stepInput.name} 
                         index = {i} 
                         handleDeleteStepInput = {handleDeleteStepInput}
                         handleStepChange = {handleStepChange}/>
                }) 
         )
}
