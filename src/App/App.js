import React from "react";
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { Modal } from '../Modal/';
import { TodoForm } from '../components/TodoForm';
import { TodosLoading } from '../components/TodosLoading';
import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { useTodos } from "./useTodos";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodosError } from "../components/TodosError";
import { ChangeAlert } from "../components/ChangeAlert";

function App() 
{
    const  {
        state,
        stateUpdaters,
    } = useTodos();
    
    const {
        error,
        loading,
        openModal, 
        totalTodos, 
        searchValue, 
        showListItems,
        searchedTodos,
        completedTodos,
        
    } = state;  

    const {
        addTodo,
        deleteTodo,
        setopenModal,
        completeTodo,
        setSearchValue,
        sincronizeTodos,
    } = stateUpdaters;
 
  return(
    <React.Fragment>
        <TodoHeader loading = {loading}>
            <TodoCounter 
                totalTodos = {totalTodos}
                completedTodos = {completedTodos}
                // loading = {loading}
            />
            
             <TodoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
                //  loading = {loading}
            /> 
        </TodoHeader>
    
       
            <TodoList 
                totalTodos = {totalTodos}
                error = {error}
                loading = {loading}
                searchText={searchValue}
                searchedTodos = {searchedTodos}
                showListItems = {showListItems}
                onError = {() => <TodosError/>}
                onLoading = {() => <TodosLoading/>}
                
                onEmptyTodos = {() => <EmptyTodos/>}
                onEmptySearchResults = {(searchText) => <p>No hay resultados para {searchText}</p>}
            >
                {todo => (
                            <TodoItem 
                            key={todo.text}
                            text={todo.text}
                            completed = {todo.completed}
                            onCompleted = {() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                            />  
                        )}
            </TodoList>
        {
            !!openModal && (
            <Modal>
                <TodoForm addTodo={addTodo} setopenModal={setopenModal}/>
            </Modal>
        )} 
     
        <CreateTodoButton setopenModal={setopenModal} />
        <ChangeAlert sincronize={sincronizeTodos}/>
    </React.Fragment>
  );
}

export default App;
