import React, { useContext } from 'react';
import  '../styles/TodoCounter.css';

 const TodoCounter = ({totalTodos, completedTodos}) => {

  return (
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos}</h2>
  )
}

export {TodoCounter};
