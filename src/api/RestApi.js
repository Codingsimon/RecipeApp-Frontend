import axios from 'axios';

/*loading rest*/
/*const asynchronousFunction = callback => {
    const url = "https://recipeapp-spring-backend.herokuapp.com/recipe";
    const response = await fetch(url);
    const data = await response.json();
    return data.then(response => {
        callback(response);
    })
} 

const mainFunction = () => {
    const callback = result => {
      console.log(result)
    }
  
    asynchronousFunction(callback)
  }

  const callbackFunction = result => {
    console.log(result)
  }*/
  
  

export class RestApi {
    /*https://recipeapp-spring-backend.herokuapp.com/swagger-ui.html*/

    constructor(){
        this.dataList = null;
        axios.get('https://recipeapp-spring-backend.herokuapp.com/recipe/cc2b0b9d-1428-4887-ab3d-68552cd84235').then(response => {
            this.dataList = response.data;
            console.log(this.dataList);
        }).catch(error => console.error(error));
    }

    state = {
        loading: true
    }


    getData(){
        return null;
    }
}

export default RestApi
