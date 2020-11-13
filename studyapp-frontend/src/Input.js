import React, {useState, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StepInputList from "./StepInputList"
import IngredientInputList from "./IngredientInputList"
import {v4 as uuidv4} from 'uuid'
import Creatable from 'react-select/creatable';
import Select from 'react-select'


export default function Input() {

    const options = [
        {
            value: 'chocolate',
            label: 'Chocolate'
        }, {
            value: 'strawberry',
            label: 'Strawberry'
        }, {
            value: 'vanilla',
            label: 'Vanilla'
        }
    ]

    const [stepInputs, setStepInputs] = useState([])

    const [ingredientInputs, setIngredientInputs] = useState([])

    const [selectedIngredient, setSelectedIngredient] = useState([])

    const stepInputRef = useRef()
    const ingredientInputRef = useRef()

    function handleAddStepInput(e) {
        const name = stepInputRef.current.value
        console.log("REF: " + name)

        setStepInputs(prevInput => {
            return [
                ...prevInput, {
                    id: uuidv4(),
                    name: name
                }
            ]
        })
        stepInputRef.current.value = null
    }

    function handleAddIngredientInput(e) {
        const name = selectedIngredient
        console.log("REF: " + ingredientInputRef.current.value)
        setIngredientInputs(prevInput => {
            return [
                ...prevInput, {
                    id: uuidv4(),
                    name: name
                }
            ]
        })
    }

    const handleIngredientChange = e => {
        setSelectedIngredient(e.label);
    }

    function deleteStepInput(id) {
        const newStepinputs = stepInputs.filter(stepInput => stepInput.id !== id)
        setStepInputs(newStepinputs)
    }

    function deleteIngredientInput(id) {
        const newIngredientInputs = ingredientInputs.filter(ingredientInput => ingredientInput.id !== id)
        setIngredientInputs(newIngredientInputs)
    }

    return (
        <div class="form-group">

            <div className="mb-3">
                <label for="exampleInputEmail1">Title</label>
                <input 
                    type="text"
                    class="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>


            <div className="mb-3">
                <label for="exampleInputEmail1">Description</label>
                <input 
                    type="text"
                    class="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>

            <label for="exampleInputEmail1">Steps</label>

            <div class="input-group mb-2">
                <input ref={stepInputRef}
                    type="text"
                    class="form-control"
                    placeholder="Add step"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
                <div class="input-group-append">
                    <button onClick={handleAddStepInput}
                        class="btn btn-outline-secondary "
                        type="button">Add</button>
                </div>
            </div>

            <StepInputList stepInputs={stepInputs}
                deleteStepInput={deleteStepInput}/>


            <label className="mt-2" for="exampleInputEmail1">Ingredients</label>

            <div className="mb-2">
                <Creatable class="input-group-text " id="basic-addon3"
                    onChange={handleIngredientChange}
                    ref={ingredientInputRef}
                    options={options}/>
                <span>
                    <button onClick={handleAddIngredientInput}
                        class="btn btn-outline-secondary "
                        type="button">Add</button>
                </span>
            </div>


            <IngredientInputList ingredientInputs={ingredientInputs}
                deleteIngredientInput={deleteIngredientInput}
                handleIngredientChange={handleIngredientChange}
                selectedIngredient={selectedIngredient}
                options={options}/>


            <div className="mb-3 mt-3">
                <label for="exampleInputEmail1">Notes</label>
                <input 
                    type="text"
                    class="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>


            <div className="mb-3">
                <label for="exampleInputEmail1">Summary</label>
                <input 
                    type="text"
                    class="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>

            <form>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Upload image</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                </div>
            </form>

            <button class="btn btn-primary" type="submit">Submit form</button>


        </div>
    )
}
