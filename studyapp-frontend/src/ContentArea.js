import React, { PureComponent } from 'react'
import Recipe from './Recipe'
import Recipiecard from './Recipecard'
import Styles from './style.css'
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
