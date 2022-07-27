import React from 'react';
import  '../styles/TodoCounter.css';

 const TodoCounter = ({totalTodos, completedTodos, loading}) => {

  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totalTodos}</h2>
  )
}

export {TodoCounter};
