import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import foodPicture from './food.jpeg';
import RecipeApi from './api/RecipeApi';
import RestApi from './api/RestApi';


export default class Titlecard extends PureComponent {
    
    constructor(props){
        super(props);
        const restApi = new RestApi();

        this.state = {
           message: 'Appletini'
        }
    }
    
    /*async componentDidMount(){
        const url = "http://localhost:8080/user";
        const response = fetch(url)
        const data = (await response).json()
        console.log(data.results[0])
    }*/

    render() {
        return (
            <div className="Titlecard">
                <div className="cardheader">    

                    <h2>{this.state.message}</h2>


                    <button type="button" className="btn btn-outline-primary edit">
                        Edit
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                        </svg>
                    </button>
                </div>
                <img src={foodPicture} alt="Here is an image"></img>
            </div>
        )
    }
}
