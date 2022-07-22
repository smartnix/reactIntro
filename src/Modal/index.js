import ReactDOM, { createPortal } from 'react-dom'; //Esto se cambia
import "../styles/Modal.css";

function Modal({children}) 
{
    return createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById("modal")
    );    
}

export {Modal};