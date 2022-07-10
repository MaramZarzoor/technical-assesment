import React from "react";


export function RepositoryCard({repo}: any) {
    return (
        <div key={repo.id} className="result" tabIndex={0}>
    <span className="result-container">
    <h3 className="result-name">{repo['name']}</h3>
        <div className="image-container">
    <img src={repo?.['owner']?.['avatar_url']} alt="" className="result-image"/>
        </div>
        </span>
        </div>
    );
}