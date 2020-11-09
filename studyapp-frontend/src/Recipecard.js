import React, { PureComponent } from 'react'
import Titlecard from './Titlecard.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Styles from './style.css'

export default class Recipecard extends PureComponent {
    render() {
        return (
            <div className="Recipecard">
                <Titlecard/>
                <h3>Subtitle</h3>
                <p>Additional Info Date Author</p>
                <a href="#" class="btn btn-secondary my-2">Read Article</a>
            </div>
        )
    }
}
