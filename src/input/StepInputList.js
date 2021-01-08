import React, {useRef} from 'react'
import StepInput from "./StepInput"

export default function StepInputList({stepInputs, handleDeleteStepInput, handleStepChange, handleStepImageDelete, handleStepImageChange}) {
    return(stepInputs.map((stepInput, i) => {
        return <StepInput key={
                stepInput.id
            }
            stepInput={stepInput}
            index={i}
            handleDeleteStepInput={handleDeleteStepInput}
            handleStepChange={handleStepChange}
            handleStepImageDelete = {handleStepImageDelete}
            handleStepImageChange = {handleStepImageChange}/>
    }))
}
