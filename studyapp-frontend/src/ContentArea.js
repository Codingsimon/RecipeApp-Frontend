import React, { PureComponent } from 'react'
import Recipe from './Recipe'
import Recipiecard from './Recipecard'
import Styles from './style.css'
import Sidebar from './Sidebar'

export default class ContentArea extends PureComponent {
    render() {
        return (
            <div className="ContentArea">
                <div className="main">
                    <Recipiecard />
                    <Recipiecard />
                    <Recipiecard />
                    <Recipiecard />
                </div>
                <Sidebar/>
                {/*
                <Recipe/>*/}
            </div>
        )
    }
}