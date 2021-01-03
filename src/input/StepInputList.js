import React, {useRef} from 'react'
import StepInput from "./StepInput"

export default function StepInputList({stepInputs, handleDeleteStepInput, handleStepChange}) {
    return(stepInputs.map((stepInput, i) => {
        return <StepInput key={
                stepInput.id
            }
            stepInput={stepInput}
            index={i}
            handleDeleteStepInput={handleDeleteStepInput}
            handleStepChange={handleStepChange}/>
    }))
}
