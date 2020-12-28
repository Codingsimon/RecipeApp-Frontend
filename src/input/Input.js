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

    const [ingredientOptions, setIngredientOptions] = useState([])
    const [categoryOptions, setCategoryOptions] = useState([])

    //for rendering lists
    const [stepInputs, setStepInputs] = useState([])
    const [ingredientInputs, setIngredientInputs] = useState([])
    const [categoryInputs, setCategoyInputs] = useState([])
    const [image, setImage] = useState('')
    const [imageSrc, setImageSrc] = useState('')

    const [difficulty, setDifficulty] = useState('')

    const [selectedIngredient, setSelectedIngredient] = useState()
    const [selectedCategory, setSelectedCategory] = useState()

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
            const categoryTemp = []
            response.data.forEach(category => {
                categoryTemp.push({value: category.name, label: category.name})
                }
            )
            setCategoryOptions(categoryTemp)
        })
        setDifficulty(1)
                
     }, []);

    function addStepInput() {
        if(stepInputRef.current.value) {
            const name = stepInputRef.current.value
        setStepInputs(prevInput => {
            return [
                ...prevInput, {
                    id: uuidv4(),
                    name: name
                }
            ]
        })
        }
        stepInputRef.current.value = ""
    }

    function addIngredientInput() {
        let ingredientsTemp = [...ingredients]
        ingredientsTemp.push(selectedIngredient.label)
        setIngredients(ingredientsTemp)
        if(selectedIngredient) {
        setIngredientInputs(prevInput => {
            return [
                ...prevInput, {
                    id: uuidv4(),
                    selectedInput: selectedIngredient
                }
            ]
        })
        }
        setSelectedIngredient(null)
    }

    function addCategoryInput(e) {
            setCategoyInputs(prevInput => {
                return [
                    ...prevInput, {
                        id: uuidv4(),
                        selectedInput: e
                    }
                ]
            })
            setSelectedCategory(null)
    }
    
    function postRecipe() {
        
        let recipeToAdd = new Recipe(titleInputRef.current.value)
        if(getSteps().length) {
            recipeToAdd.steps = getSteps()
        }

        if(descriptionInputRef.current.value) {
            recipeToAdd.description = descriptionInputRef.current.value
        } 

        if(notesInputRef.current.value) {
            recipeToAdd.notes = notesInputRef.current.value
        } 
     

        if(categoryInputs.length) {
            let categories = []
        categoryInputs.forEach(category => {
            categories.push(new Category(category.selectedInput.label))
        })
        recipeToAdd.categories = categories
        }
        
        
            if(ingredients.length) {
                recipeToAdd.ingredients = getIngredients()
            }
            
        
        
        recipeToAdd.difficulty = Object.keys(Recipe.DifficultyEnum)[difficulty-1]
       
        

     
        if(image) { 
            let formData = new FormData()
            formData.append('file', image)
            axios.post('https://recipeapp-spring-backend.herokuapp.com/image', formData).then((response) => {
                recipeToAdd.mainImageUrl = response.data     
                axios.post('https://recipeapp-spring-backend.herokuapp.com/recipe', recipeToAdd)
            });
        } else {
            axios.post('https://recipeapp-spring-backend.herokuapp.com/recipe', recipeToAdd)
        }


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
            ingreientArray.push(new Ingredient(ingredient))
        })
        return ingreientArray
    }

    function handleFileSelected(e) {
        setImage(e.target.files[0]) 
        setImageSrc(URL.createObjectURL(e.target.files[0]))
    }

    function handleSetSelectedIngredient(e) {
        setSelectedIngredient(e)
    }

    function formatCreateLabelCategory (value) {
        return "Kategorie " + value + " erstellen"
      }

    function formatCreateLabelIngredient (value) {
    return "Zutat " + value + " erstellen"
    }

    return (

        <div  >
            <div className=" form-group">
                <h3 >Titel</h3>
                <input 
                    ref={titleInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Titel hinzufügen"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>
            <div className="mb-3 form-group">
                <h3 >Kategorien</h3>
                <Creatable 
                        placeholder="Kategorie hinzufügen"
                        formatCreateLabel={formatCreateLabelCategory}
                        ref={categoryRef}
                        options={categoryOptions}
                        onChange={addCategoryInput}
                        value={selectedCategory}/>

                        <CategoryinputList
                            categoryInputs = {categoryInputs}
                            handleDeleteCategoryInput = {handleDeleteCategoryInput}
                        />

            </div>
            <div className="mb-3 form-group">
                <h3 >Beschreibung</h3>
                <input 
                    ref={descriptionInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Beschreibung hinzufügen"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>

            
            <div className="mb-3 form-group">
            <h3>Schritte</h3>
                <div className = "input-group">
                    <input ref={stepInputRef}
                        
                        type="text"
                        className="form-control"
                        placeholder="Schritt hinzufügen"
                   />
                        <button onClick={addStepInput}
                            className="btn btn-outline-secondary  "
                            type="button"
                            
                            >+</button>
                </div>
            </div>

            <StepInputList stepInputs={stepInputs}
                handleDeleteStepInput={handleDeleteStepInput}
                handleStepChange = {handleStepChange}/>
                
           

            <div className="mb-3" >
            <h3 className="mt-3">Zutaten</h3>
                <div className = "d-flex">
                    <div className = "w-100">
                    <Creatable  
                 
            
                        placeholder="Zutat auswählen"
                        formatCreateLabel={formatCreateLabelIngredient}
                        ref={ingredientInputRef}
                        value={selectedIngredient}
                        options={ingredientOptions}
                        onChange={handleSetSelectedIngredient}
                        />
                    </div>
              
                   <button onClick={addIngredientInput}
                        className="btn btn-outline-secondary"
                        type="button">+</button>
                </div>
            </div>
            <IngredientInputList ingredientInputs={ingredientInputs}
                handleDeleteIngredientInput={handleDeleteIngredientInput}
                handleIngredientChange={handleIngredientChange}
                options={ingredientOptions}
                />
              
            <div className="mb-3 mt-3  form-group">
                <h3>Notizen</h3>
                <input 
                    ref={notesInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Notiz hinzufügen"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon3"/>
            </div>


     
          
            <div className="form-group ">  
            <h3>Bild hochladen</h3>
           
                    <input type="file" multiple="multiple" className="form-control-file" id="exampleFormControlFile1" 
                            onChange={handleFileSelected}/>
                              <img src={imageSrc} alt="" />
            </div>
          

         
            <h3 className="mt-2" >Schwierigkeit</h3>
            <RangeSlider
                value={difficulty}
                onChange={changeEvent => setDifficulty(changeEvent.target.value)}
                min={1} max={3}
             />
            <button className="btn btn-primary mb-5" type="submit" onClick={() => postRecipe()} >Rezept hinzufügen</button> 
           
        </div >
    )
}
