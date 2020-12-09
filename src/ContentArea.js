import React, { PureComponent } from 'react'
import Recipe from './recipes/Recipe'
import Recipiecards from './recipes/Recipecards'
import Styles from './style.css'
import Sidebar from './sidebar/Sidebar'

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Input from "./Input"


export default class ContentArea extends PureComponent {
    render() {
        return (
            <div className="ContentArea">


                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Recipiecards />
                            <Sidebar></Sidebar>
                        </Route>

                        <Route path="/Recipe">
                            <Recipe />
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