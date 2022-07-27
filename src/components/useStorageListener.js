import React, { useState } from "react";

function useStorageListener(sincronize) 
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
        sincronize();
        setstorageChange(false);
    }

    return (
        {
            show: storageChange,
            toggleShow
        }
    );
    
}

export {useStorageListener}