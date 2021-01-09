import React from "react";
import {Bug} from "./Bug";

export const Bugs = ({bugs}) => {
    return (
        <div className="bug-list">
            {bugs.map(bug => {
                return <Bug key={bug.id} bug={bug}/>
            })}
        </div>

    )
}
