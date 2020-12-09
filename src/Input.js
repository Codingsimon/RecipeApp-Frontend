import React, {useState, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StepInputList from "./StepInputList"
import IngredientInputList from "./IngredientInputList"
import {v4 as uuidv4} from 'uuid'
import Creatable from 'react-select/creatable';
import Recipe from './model/Recipe'
import axios from 'axios';

export default function Input() {

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}]

    const [stepInputs, setStepInputs] = useState([])
    const [ingredientInputs, setIngredientInputs] = useState([])
    const [selectedIngredient, setSelectedIngredient] = useState([])
    const [image, setImage] = useState('')
    const [imageSrc, setImageSrc] = useState('')

    const [steps, setSteps] = useState([])

    const stepInputRef = useRef()
    const titleInput = useRef()
    const descriptionInput= useRef()
    const notesInput= useRef()
    const ingredientInputRef = useRef()
    
 

    function handleAddStepInput(e) {
        const name = stepInputRef.current.value

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

    function postRecipe() {
        let recipeToAdd = new Recipe(titleInput.current.value)
        console.log(titleInput.current.value)
        axios.post('https://recipeapp-spring-backend.herokuapp.com/recipe', recipeToAdd).then((response) => {
            let formData = new FormData()
            formData.append('file', image)
            formData.append('isMainImage', true)
            axios.post('https://recipeapp-spring-backend.herokuapp.com/recipe/' + response.data.uuid + '/image',formData).then((response) => {
                console.log(response.data)
            });
        });
    }

    function handleFileSelected(e) {
        setImage(e.target.files[0]) 
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    function stepChange(index, name) {
        let stepsTemp = [...steps]
        stepsTemp[index] = name;
        setSteps(stepsTemp)
    }

    console.log(steps)


  
    return (

        <div className="form-group">
            <div className="mb-3">
                <label >Title</label>
                <input 
                    ref={titleInput}
                    type="text"
                    className="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>

            <div className="mb-3">
                <label>Description</label>
                <input 
                    ref={descriptionInput}
                    type="text"
                    className="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>

            <label>Steps</label>

            <div className="input-group mb-2">
                <input ref={stepInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Add step"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
                <div className="input-group-append">
                    <button onClick={handleAddStepInput}
                        className="btn btn-outline-secondary "
                        type="button">Add</button>
                </div>
            </div>

            <StepInputList stepInputs={stepInputs}
                deleteStepInput={deleteStepInput}
                stepChange = {stepChange}/>

            <label className="mt-2">Ingredients</label>

            <div className="mb-2">
                <Creatable class="input-group-text " id="basic-addon3"
                    onChange={handleIngredientChange}
                    ref={ingredientInputRef}
                    options={options}/>
                <span>
                    <button onClick={handleAddIngredientInput}
                        className="btn btn-outline-secondary "
                        type="button">Add</button>
                </span>
            </div>

            <IngredientInputList ingredientInputs={ingredientInputs}
                deleteIngredientInput={deleteIngredientInput}
                handleIngredientChange={handleIngredientChange}
                selectedIngredient={selectedIngredient}
                options={options}/>
            <div className="mb-3 mt-3">
                <label>Notes</label>
                <input 
                    ref={notesInput}
                    type="text"
                    className="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>

            <div className="mb-3">
                <label>Summary</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>

            <form>
                <div className="form-group">
                    <label>Upload image</label>
                    <input type="file" multiple="multiple" className="form-control-file" id="exampleFormControlFile1" 
                            onChange={handleFileSelected}/>
                              <img src={imageSrc} />
                </div>
            </form>

            <button className="btn btn-primary" type="submit" onClick={() => postRecipe()} >Submit form</button>
            
        </div>
    )
}
