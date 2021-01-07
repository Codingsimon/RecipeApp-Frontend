import React, { PureComponent } from 'react'
import Recipe from './recipes/Recipe'
import Recipiecards from './recipes/Recipecards'
import Styles from './style.css'
import Sidebar from './sidebar/Sidebar'
import Footer from './Footer'

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Input from "./input/Input"


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
                            <Sidebar></Sidebar>
                        </Route>

                        <Route path="/addRecipe">
                            <Input/>
                            <Sidebar></Sidebar>

                        </Route>
                        

                    
                    </Switch>
                </Router>
               
            </div>
        )
    }
}
