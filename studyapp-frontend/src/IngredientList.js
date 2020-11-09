import React, { PureComponent } from 'react'

export default class IngredientList extends PureComponent {
    render() {
        return (
            <div>
                <p>IngredientList</p>
                <form class="form-inline mt-2 mt-md-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Portions" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Calcualte</button>
            </form>
                <ul>
                    <form></form>
                    <li>Oil 1Drop</li>
                    <li>Butter 30g</li>
                    <li>Rice 200g</li>
                </ul>
            </div>
        )
    }
}
