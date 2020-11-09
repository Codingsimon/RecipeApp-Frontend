import React, { PureComponent } from 'react'

export default class Titlecard extends PureComponent {
    render() {
        return (
            <div>
                <h2>Reisauflauf</h2>
                <p>Edit Menu</p>
                <img src={require('./testimage.jpg')} alt="Here is an image"></img>
            </div>
        )
    }
}
