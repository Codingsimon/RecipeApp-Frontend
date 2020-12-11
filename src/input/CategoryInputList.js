import React, {useRef} from 'react'
import CategoryInput from "./CategoryInput"

export default function CategoryinputList({categoryInputs, handleDeleteCategoryInput}) {
   
            return (
                categoryInputs.map( (categoryInput) => {
                        return <CategoryInput key = {categoryInput.id}
                        categoryInput = {categoryInput} 
                        handleDeleteCategoryInput = {handleDeleteCategoryInput}
                       />
                }) 
         )
}
