import React from "react";
import "../styles/Categories.scss"

export const Categories = ({categories, toggleCategory}) => {
    const allCategories = ['pending', 'registered', 'fixed', 'dropped']
    return (
        <div className="categories">
            <div className="categories_block">
                <ul className="categories_list">
                    <li><input type="checkbox"
                               id="checkboxOne"
                               value="Rainbow Dash"
                               defaultChecked={true}
                               onChange={() => toggleCategory("fixed")}/>
                        <label htmlFor="checkboxOne">Вирішено</label>
                    </li>
                    <li><input type="checkbox"
                               id="checkboxTwo"
                               value="Cotton Candy"
                               defaultChecked={true}
                               onChange={() => toggleCategory("pending")}/>
                        <label htmlFor="checkboxTwo">Очікує рішення</label>
                    </li>
                    <li><input type="checkbox"
                               id="checkboxThree"
                               value="Rarity"
                               defaultChecked={true}
                               onChange={() => toggleCategory("registered")}/>
                        <label htmlFor="checkboxThree">Зареєстровано</label>
                    </li>
                    <li><input type="checkbox"
                               id="checkboxFour"
                               value="Moondancer"
                               onChange={() => toggleCategory("dropped")}/>
                        <label htmlFor="checkboxFour">Відхилено</label>
                    </li>
                </ul>
            </div>

        </div>
    )
}
