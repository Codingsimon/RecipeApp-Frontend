import React, { PureComponent } from 'react'
import Recipe from './Recipe'
import Recipiecard from './Recipecard'
import Styles from './style.css'

export default class ContentArea extends PureComponent {
    render() {
        return (
            <div className="ContentArea">
                <Recipiecard />
                <Recipiecard />
                <Recipiecard />
                <Recipe/>
            </div>
        )
    }
}
