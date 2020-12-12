import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class CategoryList extends PureComponent {


    render() {
        console.log(this.props)
        if(this.props.categories) {
            return (
                <div>
                    <h3 className = 'mb-0'>Kategorien</h3>  
                   
                        {this.props.categories.map(category => {
                        return <div>{category.name}</div>
                        })}
                 
                  
               </div>
            )
        }
        return null
    }   
}
