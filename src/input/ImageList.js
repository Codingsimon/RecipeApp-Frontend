import React from 'react'


export default function ImageList({images}) {

    
    return (
        <div > {
            Array.from(images).map(image => {
                
                return <img src={URL.createObjectURL(image)}
                    alt=""
                    className="img-fluid imageDisplay"
                    />
        })
        } </div>
    )
}
