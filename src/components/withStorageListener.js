import React, { useState } from "react";

function withStorageListener(WrappedComponent) 
{
    return function WrappedComponentWithStorageListener(props) 
    {
        const [storageChange, setstorageChange] = useState(false);// si hubo cambios en nuestra aplicacion
         
        window.addEventListener('storage',(change) => {

            if(change.key === 'TODOS_V1')
            {
                console.log('hubo cambios en TODOS_V1');
                setstorageChange(true);
            }
        })

        const toggleShow = () => {
            props.sincronize();
            setstorageChange(false);
        }

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow = {toggleShow}
            />);
    }
}

export {withStorageListener}