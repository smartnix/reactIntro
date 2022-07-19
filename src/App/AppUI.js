import React from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';


function AppUI({
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
    }) 
    {
    return(
        <React.Fragment>
            <TodoCounter total={totalTodos} completed={completedTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        
            <TodoList>
            {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text}
                text={todo.text}
                completed = {todo.completed}
                onCompleted = {() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />    
            ))}
            </TodoList>
            <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUI};