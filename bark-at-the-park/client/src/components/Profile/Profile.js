import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import { Route } from 'react-router-dom';
import './Profile.scss'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Route path="/profile" component={Navbar}/>
                <div className="Profile">
                    <div class="container">
                        <div class="avatar-flip">
                            <img src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150" />
                            <img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150" />
                        </div>
                        <h2>John Smith</h2>
                        <h4>Pet lover, fantastic husband, proud PS4 gamer</h4>
                        <div>Age: 23 </div>
                        <div>Email: Take from database </div>
                        <div>Password: ***** </div>
                    </div>
                    
                    <div class="container">
                        <div class="avatar-flip">
                            <img src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" height="150" width="150" />
                            <img src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" height="150" width="150" />
                        </div>
                        <h2>Godzilla</h2>
                        <h4>English Shepard</h4>
                        <div>Age: 8 </div>
                        <div>Favourite food: Tacos </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}
