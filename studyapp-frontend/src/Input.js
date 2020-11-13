import React, {useState, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StepInputList from "./StepInputList"
import {v4 as uuidv4} from 'uuid'
export default function Input() {
    const [stepInputs, setStepInputs] = useState([])
    const stepInputRef = useRef()
function handleAddStepInput(e) {
    const name = stepInputRef.current.value
    setStepInputs(prevInput => {
        return [...prevInput, {id: uuidv4(),name: name}]
        
    })
    stepInputRef.current.value = null;
}

function deleteStepInput(id) {
    const newStepinputs = stepInputs.filter(stepInput => stepInput.id !==id)
    setStepInputs(newStepinputs)
    console.log("deletebtn fired")
}

    return (
            <div class="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    <input ref={stepInputRef} type="text" class="form-control mb-3" placeholder="Add title" aria-label="Recipient's username" aria-describedby="basic-addon3"/>

                    <label for="exampleInputEmail1">Steps</label>

                    <div class="input-group mb-3">


                        <input ref={stepInputRef} type="text" class="form-control" placeholder="Add step" aria-label="Recipient's username" aria-describedby="basic-addon3"/>
                        <div class="input-group-append">
                        <button onClick = {handleAddStepInput} class="btn btn-outline-secondary " type="button">Add</button>
                        </div>
                    </div>



                    <StepInputList stepInputs = {stepInputs} deleteStepInput = {deleteStepInput}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>


                    
            </div>
    )
}
