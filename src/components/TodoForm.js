import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "../styles/TodoForm.css";

function TodoForm() 
{
    const [newTodoValue, setnewTodoValue] = useState("");
    
    const {
        addTodo,
        setopenModal, 
    } = useContext(TodoContext);
    
    const onCancel = () => {
        setopenModal(false);
    };

    const onSubmit = (e) => {
        e.preventDefault();
       
        addTodo(newTodoValue);
        setopenModal(false);
    }

    const onChange = (e) => {
        console.log(e.target.value)
        setnewTodoValue(e.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Escribe la nueva tarea</label>
                <textarea placeholder="Tarea" 
                    value={newTodoValue}
                    onChange={onChange}
                    required
                />
                
          
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}>
                    Cancelar

                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Añadir
                </button>
            </div>
            </form>
        </div>
    );
}

export {TodoForm};