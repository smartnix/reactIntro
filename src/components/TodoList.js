import React from 'react'
import  '../styles/TodoList.css';
const TodoList = (props) => {

  const renderFun = props.children || props.render;

  return (
    <section className='TodoList-container'>

      {props.error && props.onError()}
      {(props.loading || !props.showListItems) && props.onLoading()}
      {(!props.loading  && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

      {props.showListItems && props.searchedTodos.map(renderFun)} {/* forma corta de iteracion*/} 
       
    </section>
  )
}

export  {TodoList}