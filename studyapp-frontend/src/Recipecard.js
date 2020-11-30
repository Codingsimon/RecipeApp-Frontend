import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import foodPicture from './food.jpeg'
import axios from 'axios'

export default class Recipecard extends PureComponent {
    state = {
        recipes: []
    }

    componentWillMount(){
        axios.get('https://randomuser.me/api/').then((response) => {
            this.setState({
                recipes: response.data
            })
        });
    }

    render() {
        let data = Array.from(this.state.recipes);
        
        let recipes = data.map((recipe) => {
            return (
                <div className="Titlecard">
                    <div className="cardheader">    
                        <h2>{recipe.gender}</h2>
                        <button type="button" className="btn btn-outline-primary edit">
                            Edit
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                            </svg>
                        </button>
                    </div>
                    <img src={foodPicture} alt="Here is an x"></img>

                    <h3>asdf</h3>
                    <p>Written by Sophie</p>
                </div>
            )
        });
        console.log(recipes);

        return (
            <div className="Recipecard">
                <h1>Didikong</h1>
                {recipes}
            </div>
        )
    }
}
