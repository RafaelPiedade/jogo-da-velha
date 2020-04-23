import React from "react";
import Profile from "../../img/profile.png";
import GitHub from "../../img/github-icon.png";
import Facebook from '../../img/facebook-icon.png';
import Instagran from '../../img/instagran-icon.png';
import Linkedin from '../../img/linkedin-icon.png';
import Twitter from '../../img/twitter-icon.png'
import "./styles.css";

import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt={"Meu profile"} />
    </dd>
    <dt className="title">Rafael Piedade</dt>
    <dd className="description">
      Sou um Dev. Estudo Front-End/UX e faço parte na comunidade da CollabCode.
    </dd>
    <dd className="socials">
      <IconSocial src={GitHub} alt="Logo da empresa GitHub" />
      <IconSocial src={Linkedin} alt="Logo da empresa Linkedin" />
      <IconSocial src={Facebook} alt="Logo da empresa Facebook" />
      <IconSocial src={Twitter} alt="Logo da empresa Twitter" />
      <IconSocial src={Instagran} alt="Logo da empresa Instagran" />
    </dd>
  </dl>
);

export default ProfileUser;
