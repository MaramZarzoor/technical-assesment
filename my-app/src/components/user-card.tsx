import React from "react";

export function UserCard({user}: any) {
    console.log(user)
    return (
        <div key={user.id} className="result" tabIndex={0}>
    <span className="result-container">
    <h3 className="result-name">{user['login']}</h3>
        <div className="image-container">
    <img src={user['avatar_url']} alt="" className="result-image"/>
        </div>
        </span>
        </div>
    );
}