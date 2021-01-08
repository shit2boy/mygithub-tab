import React from "react";
import "./Aside.css";

const Profile = ({ user }) => {
  return (
    <>
      <aside className="col">
        <div className="avatar">
          <img
            src={user.avatar_url}
            width="300px"
            className="round-img"
            alt="avatar"
          />
        </div>
        <div className="user-details">
          <h3>{user.name}</h3>
          <p>{user.login}</p>
          <div className="edit-profile">Edit Profile</div>
          <div className="p-2">
            <small>
              {" "}
              <i className="fas fa-users p-2" /> {user.followers} follower.
            </small>
            <small> {user.following} following.</small>
            <small>
              {" "}
              <i className="far fa-star p-2" /> 7.
            </small>
          </div>
        </div>
        <div className="user-details">
          <h6>Highlights</h6>
          <p>
            <span>
              <i className="fas fa-asterisk"></i> Artic Code Vault Contributor{" "}
            </span>
          </p>
        </div>
        <div>
          <h6>organisations</h6>
          <span>icons</span>
        </div>
      </aside>
    </>
  );
};

export default Profile;
