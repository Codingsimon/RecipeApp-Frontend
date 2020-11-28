import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class IngredientList extends PureComponent {
    render() {
        return (
            <div className="ingredientlist">
                <h3>IngredientList</h3>
                <form className="form-inline mt-2 mt-md-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Portions" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Calcualte</button>
            </form>
                <ul>
                    <form></form>
                        <li><p>vodka</p><p className="amount">1 cl</p></li>
                        <li><p>green apple schnapps</p><p className="amount">2 cl</p></li>
                        <li><p>lemon juice</p><p className="amount">0,25 l</p></li>
                        <li><p>ice cubes</p><p className="amount">4 pieces</p></li>
                        <li><p>apple slice</p><p className="amount">1</p></li>
                </ul>
            </div>
        )
    }
}
