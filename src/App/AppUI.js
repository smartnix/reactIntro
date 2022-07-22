import React, { useContext } from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoContext } from '../TodoContext';


function AppUI() 
{
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error
    } = useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch/>

            {/* <TodoContext.Consumer> */}
               
            <TodoList>
                {error && <p>Error...</p>}
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
               
            {/* </TodoContext.Consumer> */}
            <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUI};