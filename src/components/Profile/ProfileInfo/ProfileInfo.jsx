import React from 'react';
import s from './ProfileInfo.module.css';
import bannerFoto from '../../../image/banner.jpg';
import ich from '../../../image/ich.jpg';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.banner}>
        <img src={bannerFoto} />
      </div>
      <div className={s.user}>
        <div className={s.foto}>
          <img src={ich} />
        </div>
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