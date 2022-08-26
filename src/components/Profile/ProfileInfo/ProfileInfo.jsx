import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.banner}>Banner</div>
      <div className={s.user}>
        <div className={s.foto}>Foto</div>
        <div className={s.name}> 
          <div className={s.vorname}>Helene</div>
          <div className={s.datei}>
              <div className={s.dateiplus}>City: München</div>
              <div className={s.dateiplus}>Date of Birth: 25.03 </div>
              <div className={s.dateiplus}>Education: </div>
              <div className={s.dateiplus}>Contacts: 015-0282-...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;