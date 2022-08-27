import React from 'react';
import Mypost from './Mypost/Mypost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({posts, addPost, updateNewPostText}) => {

    return (
        <div> 
            <div className={s.message}>
              <ProfileInfo />
              <Mypost posts={posts} addPost={addPost} updateNewPostText={updateNewPostText} />
            </div>
         </div>
    )
}

export default Profile;