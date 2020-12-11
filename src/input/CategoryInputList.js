import React, {useRef} from 'react'
import CategoryInput from "./CategoryInput"

export default function CategoryinputList({categoryInputs, handleDeleteCategoryInput}) {

            console.log("inputs in list")
            console.log(categoryInputs)
            return (
                categoryInputs.map( (categoryInput) => {
                        return <CategoryInput key = {categoryInput.id}
                        categoryInput = {categoryInput} 
                        handleDeleteCategoryInput = {handleDeleteCategoryInput}
                       />
                }) 
         )
}
