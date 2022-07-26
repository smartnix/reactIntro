import React from "react";
import '../styles/TodoIcon.css';

import {BsCheckLg  } from'react-icons/bs';
import {RiDeleteBack2Line  } from'react-icons/ri';

const iconTypes = {
    "check":color =>(
        <BsCheckLg className="Icon-sg Icon-sgv--check fill={color}"/>
    ),
    "delete":color =>(
        <RiDeleteBack2Line className="Icon-sg Icon-sgv--delete fill={color}"/>
    )
}

function TodoIcon({type, color, onClick}) 
{
    return (
    <span className={`Icon-container Icon-containe--${type}`}
        onClick={onClick}
    >
        {iconTypes[type](color)}
    </span> 
    );   
}

export {TodoIcon}