import React from "react";
import "../styles/Bug.scss"

const statuses = {
    'pending': 'Очікує рішення',
    'registered': 'Зареєстровано',
    'fixed': 'Вирішено',
    'dropped': 'Відхилено',
};

export const Bug = ({bug}) => (
    <div className="card">
        <div className="card_image">
            <img src={bug.photo_img} alt={bug.description} className="card_image-img"/>
        </div>
        <div className="card-text">
            <h2>Баг №{bug.id}</h2>
            <p>{bug.description}</p>
            <div className={bug.status + " card-status"}>{statuses[bug.status]}</div>
        </div>
    </div>
)
