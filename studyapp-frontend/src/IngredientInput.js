import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function IngredientInput({ingredientInput, index}) {

    
    return (
        

<div class="input-group mb-3">
<span class="input-group-text mt-2" id="basic-addon3">Step {index+1}</span>
    <input value = {ingredientInput.name} type="text" class="form-control mt-2" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon3"/>
    
    <div class="input-group-append mt-2">
      <select id="inputState" class="form-control">
        <option selected>unit</option>
        <option>g</option>
        <option>ml</option>
      </select>
    </div>
    
    <div class="input-group-append">
            <button class="btn btn-outline-secondary mt-2" type="button">Delete</button>
    </div>
</div>

    )
}
