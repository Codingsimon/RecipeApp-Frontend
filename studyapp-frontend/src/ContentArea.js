import React, { PureComponent } from 'react'
import Recipe from './Recipe'
import Recipiecard from './Recipecard'
import Styles from './style.css'
import Sidebar from './Sidebar'

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Input from "./Input"


export default class ContentArea extends PureComponent {
    render() {
        return (
            <div className="ContentArea">


                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Recipiecard />
                            <Recipiecard />
                            <Recipiecard />
                            <Recipe/>
                            <Sidebar></Sidebar>
                        </Route>

                        <Route path="/addRecipe">
                            <Input/>
                        </Route>
                        

                    
                    </Switch>
                </Router>
               
            </div>
        )
    }
}
