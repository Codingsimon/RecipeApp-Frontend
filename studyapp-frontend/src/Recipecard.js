import React, { PureComponent } from 'react'
import Titlecard from './Titlecard.js'


export default class Recipecard extends PureComponent {
    render() {
        return (
            <div style={{borderRadius: "1px", backgroundColor: "green"}}>
                <Titlecard/>
                <h3>Subtitle</h3>
                <p>Additional Info Date Author</p>
                <button>Read Article</button>
            </div>
        )
    }
}
