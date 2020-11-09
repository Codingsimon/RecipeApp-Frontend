import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">



              <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a class="navbar-brand" href="#">Top navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
              <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>



        <main role="main" class="container">
          <div class="jumbotron">
            <h1>Create new Card</h1>
            <p class="lead">Add your Question here</p>
            <input class="form-control mr-sm-2" type="text" placeholder="Question Text" aria-label="Question Text"/>
            <p class="lead">Add your Answer here</p>
            <input class="form-control mr-sm-2" type="text" placeholder="Question Text" aria-label="Question Text"/>


            <div class="btn-group">
              <button class="btn">Action</button>
              <button class="btn dropdown-toggle" data-toggle="dropdown">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>True</li>
                <li>False</li>
              </ul>
            </div>


            <a class="btn btn-lg btn-primary" href="/docs/4.5/components/navbar/" role="button">add Card</a>
          </div>
        </main>


   
        
      </header>
    </div>
  );
}

export default App;
