import React from 'react';
import  '../styles/TodoCounter.css';

 const TodoCounter = ({total, completed}) => {

  return (
    <h2 className='TodoCounter'>Has completado {completed} de {total}</h2>
  )
}

export {TodoCounter};
