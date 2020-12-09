import React, {useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function StepInput({stepInput, index, deleteStepInput, stepChange}) {

    const stepRef = useRef()

    function handleDeleteStepInput() {
        deleteStepInput(stepInput.id)
    }

    function handleStepChange() {
        stepChange(index, stepRef.current.value)
    }

    useEffect(() => {    
        stepChange(index, stepInput.name)
     });
    

     console.log("teas")
    return (

        <div className="input-group mt-1">
            <span className="input-group-text " id="basic-addon3">Step {
                index + 1
            }</span>
            <input defaultValue={stepInput.name}
                ref = {stepRef}
                onChange={handleStepChange}
                type="text"
                className="form-control"
                aria-describedby="basic-addon3"/>

            <div className="input-group-append">
                <button onClick={handleDeleteStepInput}
                    className="btn btn-outline-secondary "
                    type="button">Delete</button>
            </div>
        </div>

    )
}
