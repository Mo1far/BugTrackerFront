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
        <img className="card__image" src={"http://elit-bugtracker.tk/" + bug.photo_img} alt=""/>
        <div className="card__content">
            <p className="card__content_id">
                Баг №{bug.id}
            </p>
            <p className="card__content_location">
                {bug.location}
            </p>
            <p className="card__content_description">
                {bug.description}
            </p>
        </div>
        <div className={`card__status ${bug.status}`}>
            <p className="card__status_name">
                {statuses[bug.status]}
            </p>
        </div>
    </div>

//<div className="card">
    // <div className="card_image">
    // <img src={bug.photo_img} alt={bug.description} className="card_image-img"/>
    // </div>
    // <div className="card-text">
    // <h2>Баг №{bug.id}</h2>
    // <p>{bug.description}</p>
    // <div className={bug.status + " card-status"}>{statuses[bug.status]}</div>
    // </div>
    // </div>
)
