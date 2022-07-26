import React, { Children } from "react";

function TodoHeader({children, loading}) 
{
    return (
        <header>
           {Children
           .toArray(children)
           .map((child,index) => React.cloneElement(child, {loading, key:index}))} 
        </header>
    );
}

export {TodoHeader}