import React, { PureComponent } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Menu extends PureComponent {
    render() {
        return (
            <div>
                  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a class="navbar-brand" href="#">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-suit-club-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
              <path d="M8 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm7 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
              <path d="M5.602 14.153c.5-.758 1.224-1.98 1.83-3.498.187-.467.949-.467 1.136 0a19.816 19.816 0 0 0 1.83 3.498c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847z"/>
              <path d="M7 7h2v4H7V7z"/>
            </svg>
            Fresh Food</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/addRecipe">Add Recipe</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Services</a>
              </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
            </div>
        )
    }
}
