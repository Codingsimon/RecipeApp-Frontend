import React, { PureComponent } from 'react'
import profilepicture from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Profile extends PureComponent {
    render() {
        return (
            <div className="profile">
                <img src={profilepicture} alt="Here is an image"></img>
                <h4>Hallo bei Fresh Food</h4>
                <p>Wir sind die Fresh Food Gruppe. Hier findest du gesunde Rezete mit Mengenangaben abhängig der Portionen. Auch einen Überblick über die Nährwerte findest du zu jedem Rezept.</p>
                <p>Über uns</p>
                <div className="cite">Das Icon oberhalt wurde gemacht von <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> zu finden bei <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        )
    }
}
