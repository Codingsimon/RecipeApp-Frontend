import React, {useState, useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StepInputList from "./StepInputList"
import IngredientInputList from "./IngredientInputList"
import {v4 as uuidv4} from 'uuid'
import Creatable from 'react-select/creatable';
import Recipe from './model/Recipe'
import axios from 'axios';
import Step from './model/Step'
import Category from './model/Category'
import Ingredient from './model/Ingredient'

export default function Input() {

    //Dropdown options, loaded in useEffect hook
    const ingredientOptions = []
    const categoryOptions = []

    //for rendering lists
    const [stepInputs, setStepInputs] = useState([])
    const [ingredientInputs, setIngredientInputs] = useState([])
    const [image, setImage] = useState('')
    const [imageSrc, setImageSrc] = useState('')

    //for callback onChange
    const [steps, setSteps] = useState([])
    const [ingredients, setIngredients] = useState([])


    function handleDeleteStepInput(id, index) {
        const stepsTemp = [...steps]
        stepsTemp.splice(index, 1)
        setSteps(stepsTemp)
        const newStepinputs = stepInputs.filter(stepInput => stepInput.id !== id)
        setStepInputs(newStepinputs)
    }

    function handleDeleteIngredientInput(id, index) {
        const ingrediensTemp = [...ingredients]
        ingrediensTemp.splice(index, 1)
        setSteps(ingrediensTemp)
        const newIngredientInputs = ingredientInputs.filter(ingredientInput => ingredientInput.id !== id)
        setIngredientInputs(newIngredientInputs)
    }

    function handleStepChange(index, name) {
        let stepsTemp = [...steps]
        stepsTemp[index] = name;
        setSteps(stepsTemp)
    }

    function handleIngredientChange(index, name){
        let ingredientsTemp = [...ingredients]
        ingredientsTemp[index] = name;
        setIngredients(ingredientsTemp)
    }


    //Dom refs
    const stepInputRef = useRef()
    const titleInputRef = useRef()
    const descriptionInputRef= useRef()
    const notesInputRef= useRef()
    const ingredientInputRef = useRef()
    const categoryRef = useRef()
    
   
    useEffect(() => {    

        //loads options for dropdown on page load
        axios.get('https://recipeapp-spring-backend.herokuapp.com/recipe').then((response) => {
            response.data.forEach(recipe => {
                if(recipe.category!==null) { 
                    categoryOptions.push({value: recipe.category.name, label: recipe.category.name})
                }
                if(recipe.ingredients!==null) {
                    recipe.ingredients.forEach(ingredient => {
                        ingredientOptions.push({value: ingredient.name, label: ingredient.name})
                        
                    })
                }
            })
        });
     }, );

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
        const name = ingredientInputRef.current.state.value.value
        setIngredientInputs(prevInput => {
            return [
                ...prevInput, {
                    id: uuidv4(),
                    name: name
                }
            ]
        })
    }
    
    

    function postRecipe() {
        console.log(getIngredients())
        let recipeToAdd = new Recipe(titleInputRef.current.value)
        recipeToAdd.steps = getSteps()
        recipeToAdd.description = descriptionInputRef
        recipeToAdd.notes = notesInputRef.current.value !== undefined ? notesInputRef.current.value : null
        recipeToAdd.description = descriptionInputRef.current.value !== undefined ? descriptionInputRef.current.value : null
        let category = new Category()
        category.name = categoryRef.current.state.value.value
        recipeToAdd.category = category
        recipeToAdd.ingredients = getIngredients()
        axios.post('https://recipeapp-spring-backend.herokuapp.com/recipe', recipeToAdd).then((response) => {
            if(image!=='') {
                let formData = new FormData()
                formData.append('file', image)
                formData.append('isMainImage', true)
                axios.post('https://recipeapp-spring-backend.herokuapp.com/recipe/' + response.data.uuid + '/image',formData).then((response) => {
                });
            }
        });
    }

    function getSteps(){
        let stepArray = []
        steps.forEach( step => {
            let s = new Step();
            s.description = step
            stepArray.push(s)
        })
        return stepArray
    }

    function getIngredients(){
        let ingreientArray = []
        ingredients.forEach( ingredient => {
            let i = new Ingredient()
            i.name = ingredient
            ingreientArray.push(i)
        })
        console.log(ingreientArray)
        return ingreientArray
    }

    function handleFileSelected(e) {
        setImage(e.target.files[0]) 
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    

    return (

        <div className="form-group">
            <div className="mb-3">
                <label >Title</label>
                <input 
                    ref={titleInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>
            <div className="mb-3">
            <label >Category</label>
            <Creatable class="input-group-text " id="basic-addon3"
                    ref={categoryRef}
                    options={categoryOptions}/>
            </div>
            <div className="mb-3">
                <label>Description</label>
                <input 
                    ref={descriptionInputRef}
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
                handleDeleteStepInput={handleDeleteStepInput}
                handleStepChange = {handleStepChange}/>
                
            <label className="mt-2">Ingredients</label>

            <div className="mb-2">
                <Creatable class="input-group-text " id="basic-addon3"
                    onChange={handleIngredientChange}
                    ref={ingredientInputRef}
                    options={ingredientOptions}/>
                <span>
                    <button onClick={handleAddIngredientInput}
                        className="btn btn-outline-secondary "
                        type="button">Add</button>
                </span>
            </div>

        
            <IngredientInputList ingredientInputs={ingredientInputs}
                handleDeleteIngredientInput={handleDeleteIngredientInput}
                handleIngredientChange={handleIngredientChange}
                options={ingredientOptions}
                />
              
            <div className="mb-3 mt-3">
                <label>Notes</label>
                <input 
                    ref={notesInputRef}
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
                              <img src={imageSrc} alt="" />
                </div>
            </form>

            <button className="btn btn-primary" type="submit" onClick={() => postRecipe()} >Submit form</button>
            
        </div>
    )
}
