import React, { Component } from 'react'
import Profile from './Profile.js'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <hr></hr>
                <Profile/>
                <hr></hr>
            </div>
        )
    }
}
