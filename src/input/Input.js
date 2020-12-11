import React, {useState, useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import StepInputList from "./StepInputList"
import IngredientInputList from "./IngredientInputList"
import {v4 as uuidv4} from 'uuid'
import Creatable from 'react-select/creatable';
import Recipe from '../model/Recipe'
import axios from 'axios';
import Step from '../model/Step'
import Category from '../model/Category'
import Ingredient from '../model/Ingredient'
import CategoryinputList from './CategoryInputList'


import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

export default function Input() {

    //Dropdown options, loaded in useEffect hook
   
    const categoryOptions = []
    const [ingredientOptions, setIngredientOptions] = useState([])

    //for rendering lists
    const [stepInputs, setStepInputs] = useState([])
    const [ingredientInputs, setIngredientInputs] = useState([])
    const [categoryInputs, setCategoyInputs] = useState([])
    const [image, setImage] = useState('')
    const [imageSrc, setImageSrc] = useState('')

    const [difficulty, setDifficulty] = useState('')

    const [selectedIngredient, setSelectedInput] = useState()

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

    function handleDeleteCategoryInput(id) {
        const newCategoryInput = categoryInputs.filter(categoryInput => categoryInput.id !== id)
        setCategoyInputs(newCategoryInput)
    }

    function handleStepChange(index, name) {
        let stepsTemp = [...steps]
        stepsTemp[index] = name;
        setSteps(stepsTemp)
    }

    function handleIngredientChange(index, name){
        console.log("igchange")
        console.log(name)
        let ingredientsTemp = [...ingredients]
        ingredientsTemp[index] = name;
        setIngredients(ingredientsTemp)
        console.log("ingtemp")
        console.log(ingredientsTemp)
    }


    //Dom refs
    const stepInputRef = useRef()
    const titleInputRef = useRef()
    const descriptionInputRef= useRef()
    const notesInputRef= useRef()
    const ingredientInputRef = useRef()
    const categoryRef = useRef()
    
   
    useEffect( () => {    

        //loads options for dropdown on page load
        axios.get('https://recipeapp-spring-backend.herokuapp.com/ingredient').then(response => {
            const ingredientTemp = []
            response.data.forEach(ingredient => {
                ingredientTemp.push({value: ingredient.name, label: ingredient.name})
                }
            )
            setIngredientOptions(ingredientTemp)
        })
        axios.get('https://recipeapp-spring-backend.herokuapp.com/category').then(response => {
            response.data.forEach(category => {
                console.log(category.name)
                categoryOptions.push({value: category.name, label: category.name})
                }
            )
        })
                
     }, []);

    function addStepInput() {
        if(stepInputRef.current.value) {
        setStepInputs(prevInput => {
            return [
                ...prevInput, {
                    id: uuidv4(),
                    name: stepInputRef.current.value
                }
            ]
        })
        }
        stepInputRef.current.value = null
    }

    function addIngredientInput() {
        let ingredientsTemp = [...ingredients]
        console.log("inttemp")
        console.log(ingredientsTemp)
        ingredientsTemp.push(selectedIngredient.label)
        setIngredients(ingredientsTemp)
        if(selectedIngredient) {
            console.log("add selected")
            console.log(selectedIngredient)
        setIngredientInputs(prevInput => {
            return [
                ...prevInput, {
                    id: uuidv4(),
                    selectedInput: selectedIngredient
                }
            ]
        })

        

        }
       
    }

    function addCategoryInput(e) {
            console.log("changed")
            setCategoyInputs(prevInput => {
                return [
                    ...prevInput, {
                        id: uuidv4(),
                        selectedInput: e
                    }
                ]
            })
            setSelectedInput(null)
    }
    
    function postRecipe() {
        
        let recipeToAdd = new Recipe(titleInputRef.current.value)
        if(getSteps().length) {
            recipeToAdd.steps = getSteps()
        }

        if(descriptionInputRef.value) {
            console.log("desc")
            recipeToAdd.description = descriptionInputRef
        } 
     

        if(categoryInputs.length) {
            let categories = []
        categoryInputs.forEach(category => {
            categories.push(new Category(category.selectedInput.label))
        })
        recipeToAdd.categories = categories
        }
        
        
            if(ingredients.length) {
                console.log("ingredients")
                recipeToAdd.ingredients = getIngredients()
            }
            
        
        
        recipeToAdd.difficulty = Object.keys(Recipe.DifficultyEnum)[difficulty-1]
       
        console.log(recipeToAdd)
        axios.post('https://recipeapp-spring-backend.herokuapp.com/recipe', recipeToAdd).then((response) => {
            console.log("resp")
            console.log(response)
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
        console.log("ings")
        console.log(ingredients)
        ingredients.forEach( ingredient => {
            ingreientArray.push(new Ingredient(ingredient))
        })
        console.log(ingreientArray)
        return ingreientArray
    }

    function handleFileSelected(e) {
        setImage(e.target.files[0]) 
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    function setValue(e) {
        setSelectedInput(e)
        console.log("selectedip")
        console.log(e)
    }

    return (

        <div className="form-group">
            <div className="mb-3">
                <h3 >Title</h3>
                <input 
                    ref={titleInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>
            <div className="mb-3">
            <h3 >Category</h3>
            <Creatable class="input-group-text " id="basic-addon3"
                    ref={categoryRef}
                    options={categoryOptions}
                    onChange={addCategoryInput}/>

                    <CategoryinputList
                        categoryInputs = {categoryInputs}
                        handleDeleteCategoryInput = {handleDeleteCategoryInput}

                    />

            </div>
            <div className="mb-3">
                <h3>Description</h3>
                <input 
                    ref={descriptionInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>

            <h3>Steps</h3>

            <div className="input-group mb-2">
                <input ref={stepInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Add step"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
                <div className="input-group-append">
                    <button onClick={addStepInput}
                        className="btn btn-outline-secondary "
                        type="button">Add</button>
                </div>
            </div>

            <StepInputList stepInputs={stepInputs}
                handleDeleteStepInput={handleDeleteStepInput}
                handleStepChange = {handleStepChange}/>
                
            <h3 className="mt-2">Ingredients</h3>

            <div className="mb-2" styles="display-flex">
                <Creatable  
                    ref={ingredientInputRef}
                    value={selectedIngredient}
                    options={ingredientOptions}
                    onChange={setValue}
                    />
                  
                <span>
                    <button onClick={addIngredientInput}
                        className="btn btn-outline-secondary ml-10 "
                        type="button">Add</button>
                </span>
            </div>
            <IngredientInputList ingredientInputs={ingredientInputs}
                handleDeleteIngredientInput={handleDeleteIngredientInput}
                handleIngredientChange={handleIngredientChange}
                options={ingredientOptions}
                />
              
            <div className="mb-3 mt-3">
                <h3>Notes</h3>
                <input 
                    ref={notesInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Add title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>
            <form>
             
                    <h3>Upload image</h3>
                    <input type="file" multiple="multiple" className="form-control-file" id="exampleFormControlFile1" 
                            onChange={handleFileSelected}/>
                              <img src={imageSrc} alt="" />
            </form>
            <h3 >Difficulty</h3>
            <RangeSlider
            value={difficulty}
            onChange={changeEvent => setDifficulty(changeEvent.target.value)}
            min={1} max={3}
    />
            <button className="btn btn-primary mt-3" type="submit" onClick={() => postRecipe()} >Submit form</button> 
        </div>
    )
}
