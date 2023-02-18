import React from "react";
import "./UserList.css";

function UserList({users}) {
  return (
    <div className="user-list">
        {users && users.map(user => (
          <div className="user" key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div className="user-info">
              <h2>{user.login}</h2>
            </div>
          </div>
        ))}
      </div>
  );
}

export default UserList;