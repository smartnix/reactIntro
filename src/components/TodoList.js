import React from 'react'
import  '../styles/TodoList.css';
const TodoList = (props) => {
  return (
    <section className='TodoList-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}

      {props.searchedTodos.map(props.render)} {/* forma corta de iteracion*/} 
        <ul>
            {props.children}
        </ul>
    </section>
  )
}

export  {TodoList}