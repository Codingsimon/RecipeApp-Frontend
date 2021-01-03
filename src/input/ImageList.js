import React from 'react'


export default function ImageList({images}) {

    console.log("images", images)
    return (
        <div > {
            images.map(image => {
                
                return <img src={image}
                    alt=""
                    className="img-fluid imageDisplay"
                    />
        })
        } </div>
    )
}
