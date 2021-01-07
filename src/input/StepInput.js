import React, {useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Delete from './icons/Delete'


export default function StepInput({stepInput, index, handleDeleteStepInput, handleStepChange, handleStepImageDelete, handleStepImageChange}) {

    const stepRef = useRef()

    function deleteStepInput() {
        handleDeleteStepInput(stepInput.id, index)
    }

    function deleteStepImage() {
        handleStepImageDelete(index)
    }

    function stepChange() {
        handleStepChange(index, stepRef.current.value)
    }

    function stepImageChange(e) {
        handleStepImageChange(index, e.target.files[0])
    }

    useEffect(() => {
        handleStepChange(index, stepInput.name)
    }, []);
    return (
        <div>
            <div className="input-group mt-3">
                <span className="input-group-text " id="basic-addon3">Schritt {
                    index + 1
                }</span>
                <input defaultValue={
                        stepInput.name
                    }
                    ref={stepRef}
                    onChange={stepChange}
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon3"/>

                        <span class="btn btn-outline-secondary btn-file">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
                        </svg>
                        <input type="file" onChange={stepImageChange}/>
                        </span>

                <div>
                    <button onClick={deleteStepInput}
                        className="btn btn-outline-secondary "
                        type="button">
                        <Delete/>
                    </button>
                </div>

                
            </div>

            {stepInput.image? 
                <div className="  form-group">
                <img src={URL.createObjectURL(stepInput.image)}
                    className="w-25 mr-3 rounded"
                
                alt=""
                ></img> 
                <button onClick={deleteStepImage}
                className="btn btn-outline-secondary"
                type="button">
                <Delete/>
                </button> 
            </div> : null
            }
        </div>

    )
}
