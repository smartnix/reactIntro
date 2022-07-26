import React from "react";
import '../styles/TodosLoading.css';

function TodosLoading() 
{
    return (
       <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
             <p className="LoadingTodo-text" >Estamos Cargando</p>
             <span className="LoadingTodo-deleteIcon"></span>
       </div>
       
    );
}

export {TodosLoading}