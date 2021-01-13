import React from "react";
import "../styles/Bug.scss"

const statuses = {
    'pending': 'Зареєстровано',
    'registered': 'Очікує рішення ',
    'fixed': 'Вирішено',
    'dropped': 'Відхилено',
};

export const Bug = ({bug}) => (
<div className="card">
    <div className="card_image">
        <img src="https://elit-bugtracker.tk/uploads/bugs/24.jpg" alt={bug.description} className="card_image-img"/>
    </div>
    <div className="card-text">
        <h2>Баг №{bug.id}</h2>
        <p>{bug.description}</p>
        <div className={bug.status + " card-status"}>{statuses[bug.status]}</div>
    </div>
</div>
)

