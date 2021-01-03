import React, {useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Creatable from 'react-select/creatable';
import Delete from './icons/Delete';
import Select from "react-select";

export default function IngredientInput({
    ingredientInput,
    index,
    handleDeleteIngredientInput,
    handleIngredientChange,
    options
}) {
    const options1 = [
        {
            value: "g",
            label: "g"
        }, {
            value: "ml",
            label: "ml"
        }
    ]
    const ingredientRef = useRef()
    const amountRef = useRef()
    const unitRef = useRef()
    function deleteIngredientInput() {
        handleDeleteIngredientInput(ingredientInput.id, index)
    }

    function ingredientChange() {
        handleIngredientChange(index, {
            name: ingredientRef.current.state.value.value,
            amount: amountRef.current.value,
            unit: unitRef.current.state.value.value
        })
    }

    useEffect(() => {
        handleIngredientChange(index, {
            name: ingredientRef.current.state.value.value,
            amount: amountRef.current.value,
            unit: unitRef.current.state.value.value
        })

    }, []);

    console.log("ing", ingredientInput)
    return (
        <div className="d-flex mt-1">
            <div className="w-100">
                <Creatable onChange={ingredientChange}
                    options={options}
                    defaultValue={
                        ingredientInput.selectedInput.selectedIngredient
                    }
                    ref={ingredientRef}/>
            </div>
            <input defaultValue={
                    ingredientInput.selectedInput.amount
                }
                type="text"
                className="form-control w-25"
                placeholder="Menge"
                onChange={ingredientChange}
                ref={amountRef}/>
            <div className="w-50">
                <Select isSearchable={false}
                    defaultValue={
                        ingredientInput.selectedInput.selectedUnit
                    }
                    placeholder="g"
                    ref={unitRef}
                    options={options1}
                    onChange={ingredientChange}/>
            </div>
            <button onClick={deleteIngredientInput}
                className="btn btn-outline-secondary"
                type="button"
                button>
                <Delete/>
            </button>
        </div>

    )
}
