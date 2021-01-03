import React, {useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Delete from './icons/Delete'


export default function CategoryInput({categoryInput, handleDeleteCategoryInput}) {

    function deleteCategoryInput() {
        handleDeleteCategoryInput(categoryInput.id)
    }


    return (

        <div className="input-group mt-1">
            <span className="input-group-text " id="basic-addon3">
                {
                categoryInput.selectedInput.label
            } </span>

            <button onClick={deleteCategoryInput}
                className="btn btn-outline-secondary"
                type="button">

                <Delete/>
            </button>

        </div>


    /* 
        <div className="input-group mt-1">
            <a href="#">Updates <span className="badge">2</span></a>
            <div className="label label-default"> 
                {categoryInput.selectedInput.label}
                </div>
            <div className="input-group-append">
                <button onClick={deleteCategoryInput}
                    className="btn btn-outline-secondary "
                    type="button">Delete</button>
        </div>
    </div>
 */
    )
}
