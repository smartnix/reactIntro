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
      loading,
      error,
    }) 
    {
    return(
        <React.Fragment>
            <TodoCounter total={totalTodos} completed={completedTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        
            <TodoList>
                {error && <p>Eror...</p>}
                {loading && <p>Estamos cargando...</p>}

                {(!loading && !searchedTodos.length) && <p>Crea tu primera tarea</p>}

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