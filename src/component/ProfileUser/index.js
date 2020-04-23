import React from "react";
import Profile from "../../img/profile.png";
import "./styles.css";

import AvatarProfile from "../../objects/AvatarProfile";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt={"Meu profile"} />
    </dd>
    <dt className="title">Rafael Piedade</dt>
    <dd className="descriprion">
      Sou um Dev.
      Estudo Front-End/UX e faço parte na comunidade da CollabCode.
    </dd>
  </dl>
);

export default ProfileUser;
