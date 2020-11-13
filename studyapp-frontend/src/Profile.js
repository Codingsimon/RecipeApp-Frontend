import React, { PureComponent } from 'react'
import profilepicture from './portrait.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Profile extends PureComponent {
    render() {
        return (
            <div className="profile">
                <img src={profilepicture} alt="Here is an image"></img>
                <p>Hi, everyone this is my cookbook. Here you can find great recipes</p>
                <p>About me</p>
            </div>
        )
    }
}
