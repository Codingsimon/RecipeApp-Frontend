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
                <h3>A sweet and sour electric green drink with a sweet, delicious apple flavor</h3>
                <p>Written by Sophie</p>
                <a href="#" class="btn btn-secondary my-2">Read Article</a>
            </div>
        )
    }
}
