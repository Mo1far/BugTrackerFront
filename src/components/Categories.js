import React from "react";

export const Categories = ({categories, toggleCategory}) => {
    const allCategories = new Array('pending', 'registered', 'fixed', 'dropped')
    return (
        <div className="categories">
            {allCategories.map(category => (
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" aria-label={category}
                                   onChange={() => toggleCategory(category)}
                                   defaultChecked={categories.includes(category)}/>
                            <p>{category}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
