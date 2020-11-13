import React, {useState, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import IngredientInputList from "./IngredientInputList"

export default function Input() {
    const [ingredientInputs, setIngredientInputs] = useState([])
    const ingredientInputRef = useRef()
function handleAddIngredientInput(e) {
    const name = ingredientInputRef.current.value
    setIngredientInputs(prevInput => {
        return [...prevInput, {id:1,name: name}]
        
    })
    ingredientInputRef.current.value = null;
}

    return (
            <div class="form-group">
                    <label for="exampleInputEmail1">Title</label>
                    

                    <div class="input-group mb-3">
                        <input ref={ingredientInputRef} type="text" class="form-control mt-2" placeholder="Add stept" aria-label="Recipient's username" aria-describedby="basic-addon3"/>
                        <div class="input-group-append">
                        <button onClick = {handleAddIngredientInput} class="btn btn-outline-secondary mt-2 " type="button">Add</button>
                        </div>
                    </div>


                  
                    <IngredientInputList ingredientInputs = {ingredientInputs}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>


                    
            </div>
    )
}
