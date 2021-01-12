import React from "react";

export const Bug = ({bug}) => (
    <div className="card">
        <div className="card-image" />
        <div className="card-text">
            <h2>Баг №{bug.id}</h2>
            <p>{bug.description}</p>
            <div className={bug.status}>{bug.status}</div>
        </div>
    </div>
)
