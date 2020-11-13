import React, { PureComponent } from 'react'
import Recipe from './Recipe'
import Recipiecard from './Recipecard'
import Styles from './style.css'
<<<<<<< HEAD
import Sidebar from './Sidebar'
=======
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import Input from "./Input"
>>>>>>> 633bea9200a7fabd4c0b8372a006cbcb6cabe097

export default class ContentArea extends PureComponent {
    render() {
        return (
            <div className="ContentArea">
<<<<<<< HEAD
                <div className="main">
                    <Recipiecard />
                    <Recipiecard />
                    <Recipiecard />
                    <Recipiecard />
                </div>
                <Sidebar/>
                {/*
                <Recipe/>*/}
=======

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
               
>>>>>>> 633bea9200a7fabd4c0b8372a006cbcb6cabe097
            </div>
        )
    }
}
