import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function StepInput({stepInput, index, deleteStepInput}) {
    console.log(stepInput)


    function handleDeleteStepInput() {
        deleteStepInput(stepInput.id)
    }

    return (


        <div class="input-group mt-1">
            <span class="input-group-text " id="basic-addon3">Step {
                index + 1
            }</span>
            <input defaultValue={
                    stepInput.name
                }
                type="text"
                class="form-control"
                aria-describedby="basic-addon3"/>

            <div class="input-group-append">
                <button onClick={handleDeleteStepInput}
                    class="btn btn-outline-secondary "
                    type="button">Delete</button>
            </div>
        </div>

    )
}
