import React, { useContext } from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal/';
import { TodoForm } from '../components/TodoForm';
import { TodosLoading } from '../components/TodosLoading';
import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';


function AppUI() 
{
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal, 
        setopenModal,
        totalTodos, 
        completedTodos,
        searchValue, 
        setSearchValue
    } = useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoHeader>
                <TodoCounter 
                    totalTodos = {totalTodos}
                    completedTodos = {completedTodos}
                />
                
                <TodoSearch 
                    searchValue = {searchValue}
                    setSearchValue = {setSearchValue}
                />
            </TodoHeader>

            {/* <TodoContext.Consumer> */}
               
            <TodoList>
                {error && <p>Error...</p>}
                {loading && <TodosLoading/>}

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

            {
                !!openModal && (
          
                <Modal>
                    <TodoForm/>
                </Modal>
            )} 
            {/* </TodoContext.Consumer> */}
            <CreateTodoButton setopenModal={setopenModal} />
        </React.Fragment>
    );
}

export {AppUI};