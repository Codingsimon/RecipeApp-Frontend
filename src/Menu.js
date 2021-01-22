import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginButton from './model/LoginButton.js'
import LogOutButton from './model/LogOutButton.js'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';


const Menu = () => {
        const { user, isAuthenticated } = useAuth0();

        return (
            <div>
                  <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a className="navbar-brand" href="#">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-suit-club-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
              <path d="M8 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm7 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
              <path d="M5.602 14.153c.5-.758 1.224-1.98 1.83-3.498.187-.467.949-.467 1.136 0a19.816 19.816 0 0 0 1.83 3.498c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847z"/>
              <path d="M7 7h2v4H7V7z"/>
            </svg>
            Fresh Food</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                  {isAuthenticated ? (
                    <LogOutButton></LogOutButton>
                  ) : (
                    <LoginButton></LoginButton>
                  )}
                  {/*OAuth Daten*/}
                  {user}

              </li>
              <li className="nav-item">
              {isAuthenticated ? (
                  <a className="nav-link" href="/addRecipe">Rezept hinzufügen</a>
              ) : (
                  null
              )}

              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              {isAuthenticated ? (
                  <img src={user.picture} alt={user.name}></img>
              ) : (
                  null
              )}  

              
            </form>
          </div>
        </nav>
            </div>
        )
    }

export default Menu
