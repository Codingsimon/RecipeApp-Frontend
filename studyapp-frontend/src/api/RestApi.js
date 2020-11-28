import React, { Component } from 'react'

export class RestApi extends Component {
    /*https://recipeapp-spring-backend.herokuapp.com/swagger-ui.html*/

    state = {
        loading: true
    }

    async componentDidMount(){
        const url = "https://recipeapp-spring-backend.herokuapp.com/recipe";
        const response = await fetch(url);
        const data = await response.json();
        console.log("swaggggggggggggggggggggggggggr");
        console.log(data);
    } 

    /*DataSet is the data you need */
    constructor(props){
        super(props);
        console.log("--------------------------");
        this.componentDidMount();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default RestApi
