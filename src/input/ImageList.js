import React from 'react'
import Delete from './icons/Delete'
import ArrUp from './icons/ArrUp'
import ArrDown from './icons/ArrDown'



export default function ImageList({images, handleImageDelete, handleMoveImageUp, handleMoveImageDown}) {

    
    function deleteImage(index) {
        handleImageDelete(index)
    }

    function moveImageUp(index) {
        handleMoveImageUp(index)
    }

    function moveImageDown(index) {
        handleMoveImageDown(index)
    }
            console.log("updated")

    return (
        <div> {
            Array.from(images).map((image, index) => {
                return (
                    <span className="d-flex align-items-center">                       
                        <img src={URL.createObjectURL(image)}
                            alt=""
                            className="img-fluid w-25 rounded mt-1" 
                        />
                        <span className="d-inline-block ml-3 " >

                        <span className="d-flex align-items-center">
                        <span className="d-inline-block" >
                            {
                                
                            }
                            {index>0&&images.length>1? (<div >
                                        <button onClick={() => moveImageUp(index)}
                                        className="btn btn-outline-secondary mt-1 mb-1"
                                        type="button"
                                        >
                                        <ArrUp/>
                                        </button> 
                                        </div> ) 
                                    : null}
                           
                           {index<images.length-1&&images.length>1? (<div >
                                        <button onClick={() => moveImageDown(index)}
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        >
                                        <ArrDown/>
                                        </button> 
                                        </div> ) 
                                    : null}
                        </span> 
                        <button onClick={() => deleteImage(index)}
                            className="btn btn-outline-secondary ml-1 "
                            type="button">
                            <Delete/>
                        </button> 
                        {images.length>1&&index===0 ? (<span className="ml-3">Titelbild</span>) : null }
                    </span>
                        </span>
                        </span>
                        
                        
                     )
            })
        } </div>
    )
}

