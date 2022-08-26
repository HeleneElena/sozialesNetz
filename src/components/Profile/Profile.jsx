import React from 'react';
import Mypost from './Mypost/Mypost';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({posts, addPost}) => {

    return (
        <div> 
            <div className={s.message}>
              <ProfileInfo />
              <Mypost posts={posts} addPost={addPost} />
            </div>
         </div>
    )
}

export default Profile;