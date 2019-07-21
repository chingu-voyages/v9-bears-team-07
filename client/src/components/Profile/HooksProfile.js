import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar'
import './Profile.scss'

function Profile() {
  const user = useSelector(state => state.user)

  const displayDogs = (dogs) => {
    if (dogs.length === 1) {
      return (
        <div className="container">
            <div className="avatar-flip">
                <img alt="" src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" height="150" width="150" />
                <img alt="" src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" height="150" width="150" />
            </div>
            <h2>{dogs[0].name}</h2>
        </div>
      )
    }else {
      return dogs.map(dog => {
        return (
          <div className="container">
              <div className="avatar-flip">
                  <img alt="" src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" height="150" width="150" />
                  <img alt="" src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" height="150" width="150" />
              </div>
              <h2>{dog.name}</h2>
          </div>
        )
      })
    }
  }

  return (
    <div>
        <Navbar />
        <div className="Profile">
            <div className="container">
                <div className="avatar-flip">
                    <img alt="" src="http://media.idownloadblog.com/wp-content/uploads/2012/04/Phil-Schiller-headshot-e1362692403868.jpg" height="150" width="150"></img>
                    <img alt="" src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-3-12-2015.gif~original" height="150" width="150"></img>
                </div>
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <div>{`Email: ${user.email}`}</div>
            </div>
            {displayDogs(user.dogs)}


        </div>

    </div>
  )
}

export default Profile;
