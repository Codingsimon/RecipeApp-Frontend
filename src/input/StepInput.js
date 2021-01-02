import React, {useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Delete from './icons/Delete'


export default function StepInput({stepInput, index, handleDeleteStepInput, handleStepChange}) {

    const stepRef = useRef()

    function deleteStepInput() {
        handleDeleteStepInput(stepInput.id, index)
    }

    function stepChange() {
        handleStepChange(index, stepRef.current.value)

    }

    useEffect(() => {    
        handleStepChange(index, stepInput.name)
     }, []);
    return (

        <div className="input-group mt-1">
            <span className="input-group-text " id="basic-addon3">Schritt {
                index + 1
            }</span>
            <input defaultValue={stepInput.name}
                ref = {stepRef}
                onChange={stepChange}
                type="text"
                className="form-control"
                aria-describedby="basic-addon3"/>

            <div>
                <button onClick={deleteStepInput}
                    className="btn btn-outline-secondary "
                    type="button">
                    <Delete/>
                    </button>
            </div>
        </div>

    )
}
