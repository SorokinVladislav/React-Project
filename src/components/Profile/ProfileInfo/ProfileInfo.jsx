import React from 'react'
import s from './ProfileInfo.module.css'
import Preloder from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloder/>
    }

    return <div>
    <div>
        <img width={400}
            src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
    </div>
    <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>{props.profile.fullName}</div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

    </div>
    </div>
};
export default ProfileInfo;