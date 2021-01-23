import React from 'react'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';



const DeleteButton = ({recipe}) => {
    const { isAuthenticated } = useAuth0();

    function deleteRecipe() {
      axios.delete('https://recipeapp-spring-backend.herokuapp.com/recipe/' + recipe  ).then((response) => {
          window.location='/'
      })
  }

    return (
        <div>
        {isAuthenticated ? (
            <button className="btn btn-primary mt-3" type="submit" onClick={() => deleteRecipe()} >Löschen</button>
          ) : (
           null
          )}
        </div>
    )
}

export default DeleteButton

{/*const deleteButton = () => {
    const { logout } = useAuth0();
    return (
        <div>
        {isAuthenticated ? (
            <button className="btn btn-primary mt-3" type="submit" onClick={() => deleteRecipe()} >Löschen</button>
          ) : (
            <p>Fuucked</p>
          )}
        </div>
    )
}*/}