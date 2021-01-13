import React from "react";
import {Bug} from "./Bug";
import "../styles/Bugs.scss"

export const Bugs = ({bugs}) => {
    return (
        <div className="bug-lis-container">
            <div className="bug-list">
                {bugs.map(bug => {
                    return <Bug key={bug.id} bug={bug}/>
                })}
            </div>
        </div>
    )
}
