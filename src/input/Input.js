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
import ImageList from './ImageList'

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Plus from './icons/Plus'
import Delete from './icons/Delete'
import Select from "react-select";

export default function Input() { // Dropdown options, loaded in useEffect hook
    const [ingredientOptions, setIngredientOptions] = useState([])
    const [categoryOptions, setCategoryOptions] = useState([])
    const [unitOptions] = useState([{
            value: Ingredient.UnitEnum.GRAM,
            label: Ingredient.UnitEnum.GRAM
        }])

    // for rendering lists
    const [stepInputs, setStepInputs] = useState([])
    const [ingredientInputs, setIngredientInputs] = useState([])
    const [categoryInputs, setCategoyInputs] = useState([])
    const [images, setImages] = useState([])
    const [stepImage, setStepImage] = useState()

    const [difficulty, setDifficulty] = useState('')

    const [selectedIngredient, setSelectedIngredient] = useState()
    const [selectedUnit, setSelectedUnit] = useState()
    const [selectedCategory, setSelectedCategory] = useState()

    // for callback onChange
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
        setIngredients(ingrediensTemp)
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

    function handleStepImageDelete(index) {
        let stepsTemp = [...stepInputs]
        console.log(steps)
        console.log(index)
        stepsTemp[index].image = null
        setStepInputs(stepsTemp)
    }

    function handleStepImageChange(index, image) {
        let stepsTemp = [...stepInputs]
        stepsTemp[index].image = image
        setStepInputs(stepsTemp)
    }

    function handleIngredientChange(index, ingredient) {
        let ingredientsTemp = [...ingredients]
        ingredientsTemp[index] = {
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit
        }
        setIngredients(ingredientsTemp)
    }

    // Dom refs
    const stepInputRef = useRef()
    const titleInputRef = useRef()
    const descriptionInputRef = useRef()
    const notesInputRef = useRef()
    const ingredientInputRef = useRef()
    const amountRef = useRef()
    const unitRef = useRef()
    const categoryRef = useRef()

    useEffect(() => { // loads options for dropdown on page load
        axios.get('https://recipeapp-spring-backend.herokuapp.com/ingredient').then(response => {
            const ingredientTemp = []
            response.data.forEach(ingredient => {
                ingredientTemp.push({value: ingredient.name, label: ingredient.name})
            })
            setIngredientOptions(ingredientTemp)
        })
        axios.get('https://recipeapp-spring-backend.herokuapp.com/category').then(response => {
            const categoryTemp = []
            response.data.forEach(category => {
                categoryTemp.push({value: category.name, label: category.name})
            })
            setCategoryOptions(categoryTemp)
        })
        setDifficulty(1)
        setSelectedUnit(unitOptions[0])
    }, []);

    function addStepInput() {
        if (stepInputRef.current.value) {
            const name = stepInputRef.current.value
            let image = stepImage
            setStepInputs(prevInput => {
                return [
                    ...prevInput, {
                        id: uuidv4(),
                        name: name,
                        image: stepImage
                    }
                ]
            })
        }
        stepInputRef.current.value = ""
        setStepImage(null)
       
       
    }

    function addIngredientInput() {
        const amount = amountRef.current.value
        if (selectedIngredient) {
            let ingredientsTemp = [...ingredients]
            ingredientsTemp.push({name: selectedIngredient.label, amount, unit: selectedUnit.label})
            setIngredients(ingredientsTemp)
            setIngredientInputs(prevInput => {
                return [
                    ...prevInput, {
                        id: uuidv4(),
                        selectedInput: {
                            selectedIngredient,
                            amount,
                            selectedUnit
                        }
                    }
                ]
            })
            setSelectedIngredient(null)
            setSelectedUnit(null)
            amountRef.current.value = ""
        }
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
        console.log("ingredients", ingredients)
        let recipeToAdd = new Recipe(titleInputRef.current.value)
        if (getSteps().length) {
            recipeToAdd.steps = getSteps()
        }
        if (descriptionInputRef.current.value) {
            recipeToAdd.description = descriptionInputRef.current.value
        }
        if (notesInputRef.current.value) {
            recipeToAdd.notes = notesInputRef.current.value
        }
        if (categoryInputs.length) {
            let categories = []
            categoryInputs.forEach(category => {
                categories.push(new Category(category.selectedInput.label))
            })
            recipeToAdd.categories = categories
        }
        if (ingredients.length) {
            recipeToAdd.ingredients = getIngredients()
        }
        recipeToAdd.difficulty = Object.keys(Recipe.DifficultyEnum)[difficulty - 1]
        if (images) {
            let imagesToPost = [...images]
            const formDataMainImage = new FormData()
            formDataMainImage.append('file', imagesToPost.shift())
            let imgResponses = []
            let promises = []
            axios.post('https://recipeapp-spring-backend.herokuapp.com/image', formDataMainImage).then((response) => {
                recipeToAdd.mainImageUrl = response.data
                imagesToPost.forEach(image => {
                    const formDataImages = new FormData()
                    formDataImages.append('file', image)
                    promises.push(axios.post('https://recipeapp-spring-backend.herokuapp.com/image', formDataImages))
                })
                Promise.all(promises).then( responses => {
                    responses.forEach(response => {
                        imgResponses.push(response.data)
                        })
                        recipeToAdd.imageUrls = imgResponses ? imgResponses : null 
                        axios.post('https://recipeapp-spring-backend.herokuapp.com/recipe', recipeToAdd)
                    });
            })
        } else {
            axios.post('https://recipeapp-spring-backend.herokuapp.com/recipe', recipeToAdd)
        }
    }

    function getSteps() {
        let stepArray = []
        steps.forEach(step => {
            let s = new Step();
            s.description = step
            stepArray.push(s)
        })
        return stepArray
    }

    function getIngredients() {
        let ingredientArr = []
        ingredients.forEach(ingredient => {
            const ingredientToAdd = new Ingredient(ingredient.name)
            ingredientToAdd.amount = ingredient.amount
            ingredientToAdd.unit = ingredient.unit
            ingredientArr.push(ingredientToAdd)
        })
        return ingredientArr
    }

    function handleImagesSelected(e) {
        setImages(null)
        setImages(e.target.files)
    }

    function handleImageDelete(index) {
        let imagesTemp = [...images]
        imagesTemp.splice(index,1)
        setImages(imagesTemp)
    }

    function handleMoveImageUp(index) {
        let imagesTemp = [...images]
        let temp = imagesTemp[index-1];
        imagesTemp[index-1] = imagesTemp[index]
        imagesTemp[index] = temp
        setImages(imagesTemp)
    }

    function handleMoveImageDown(index) {
        let imagesTemp = [...images]
        let temp = imagesTemp[index+1];
        imagesTemp[index+1] = imagesTemp[index]
        imagesTemp[index] = temp
        setImages(imagesTemp)
    }

    function handleStepImageSelected(e) {
    
        setStepImage(e.target.files[0])
    }

    function handleSetSelectedIngredient(e) {
        setSelectedIngredient(e)
    }

    function handleSetSelectedUnit(e) {
        setSelectedUnit(e)
    }

    function formatCreateLabelCategory(value) {
        return "Kategorie " + value + " erstellen"
    }

    function formatCreateLabelIngredient(value) {
        return "Zutat " + value + " erstellen"
    }

    return (
        <div className="w-50">
            <div className=" form-group">
                <h3>Titel</h3>
                <input ref={titleInputRef}
                    className="form-control"
                    placeholder="Titel hinzufügen"/>
            </div>
            <div className="mb-3 form-group">
                <h3>Kategorien</h3>
                <Creatable placeholder="Kategorie hinzufügen"
                    formatCreateLabel={formatCreateLabelCategory}
                    ref={categoryRef}
                    options={categoryOptions}
                    onChange={addCategoryInput}
                    value={selectedCategory}/>
                <CategoryinputList categoryInputs={categoryInputs}
                    handleDeleteCategoryInput={handleDeleteCategoryInput}/>
            </div>
            <div className="mb-3 form-group">
                <h3>Beschreibung</h3>
                <textarea ref={descriptionInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Beschreibung hinzufügen"/>
            </div>
            <div className="mb-3 form-group">
                <h3>Portionen</h3>
                <input type="text" className="form-control" placeholder="Anzahl"/>
            </div>
            <div className="mb-3">
                <h3 className="mt-3">Zutaten</h3>
                <div className="d-flex ">
                    <div className="w-100">
                        <Creatable placeholder="Zutat"
                            formatCreateLabel={formatCreateLabelIngredient}
                            ref={ingredientInputRef}
                            value={selectedIngredient}
                            options={ingredientOptions}
                            onChange={handleSetSelectedIngredient}/>
                    </div>
                    <input type="text" className="form-control w-25" placeholder="Menge"
                        ref={amountRef}/>
                    <div className="w-50">
                        <Select isSearchable={false}
                            placeholder="g"
                            ref={unitRef}
                            value={selectedUnit}
                            options={unitOptions}
                            onChange={handleSetSelectedUnit}/>
                    </div>
                    <button onClick={addIngredientInput}
                        className="btn btn-outline-secondary"
                        type="button">
                        <Plus/>
                    </button>
                </div>
            </div>
            <IngredientInputList ingredientInputs={ingredientInputs}
                handleDeleteIngredientInput={handleDeleteIngredientInput}
                handleIngredientChange={handleIngredientChange}
                options={ingredientOptions}/>
            <div className=" mt-3 input-group">
                <h3>Schritte</h3>
                <div className="input-group">
                    <input ref={stepInputRef}
                        type="text"
                        className="form-control"
                        placeholder="Schritt hinzufügen"/>

                    <span class="btn btn-outline-secondary btn-file">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                        </svg>
                        <input type="file" onChange={handleStepImageSelected}/>
                    </span>
                    <button onClick={addStepInput}
                        className="btn btn-outline-secondary  "
                        type="button">
                        <Plus/>
                    </button>
                </div>
            </div>
            {stepImage? 
                <div className=" form-group">
                 <img src={URL.createObjectURL(stepImage)}
                    className="w-25 mr-3 rounded"
                
                alt=""
                ></img> 
                <button onClick={() => setStepImage(null)}
                className="btn btn-outline-secondary  "
                type="button">
                <Delete/>
                </button> 
            </div> : null
            }

            <StepInputList stepInputs={stepInputs}
                handleDeleteStepInput={handleDeleteStepInput}
                handleStepChange={handleStepChange}
                handleStepImageDelete = {handleStepImageDelete}
                handleStepImageChange = {handleStepImageChange}/>
            <div className="mb-3 mt-3  form-group">
                <h3>Notizen</h3>
                <textarea ref={notesInputRef}
                    type="text"
                    className="form-control"
                    placeholder="Notiz hinzufügen"/>
            </div>
            <h3>Fotos auswählen</h3>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" multiple
                    onChange={handleImagesSelected}/>
                <label class="custom-file-label" for="customFile">Fotos auswählen</label>
            </div>
            <ImageList images={images} handleImageDelete = {handleImageDelete} handleMoveImageUp = {handleMoveImageUp} handleMoveImageDown={handleMoveImageDown}/>
            <h3 className="mt-2">Schwierigkeit</h3>
            <RangeSlider value={difficulty}
                onChange={
                    e => setDifficulty(e.target.value)
                }
                min={1}
                max={3}/>
            <button className="btn btn-primary mb-5" type="submit"
                onClick={postRecipe}>Rezept hinzufügen</button>

        </div>
    )
}
