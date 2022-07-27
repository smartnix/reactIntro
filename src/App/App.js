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
import { ChangeAlertWithStorageListener } from "../components/ChangeAlert";


// function App()
// {
//   const [state, setstate] = useState('Estado COmpartido');

//   return (
//     <React.Fragment>
//       <TodoHeader>
//         <TodoCounter/>
//         <TodoSearch/>
//       </TodoHeader>
//       <TodoList>
//         <TodoItem state={state}/>
//       </TodoList>
//     </React.Fragment>
//   );
// }

// function TodoHeader({children}) 
// {
//   return(
//     <header>
//       {
//         children
//       }
//     </header>

//   );
// }

// function TodoList({children}) 
// {
//   return (
//     <section className="TodoList-container">
//       {children}
//     </section>
//   );
// }

// function TodoCounter() 
// {
//   return <p>Todo Counter</p>  
// }

// function TodoSearch() 
// {
//   return <p>Todo Search</p>  
  
// }

// function TodoItem({state}) 
// {
//   return <p>Todo Item {state}</p>  
  
// }

function App() 
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
      setSearchValue,
      addTodo,
      sincronizeTodos,
      showListItems
    } = useTodos();  
  console.log(showListItems)
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
                // render = {todo => (
                //                     <TodoItem 
                //                     key={todo.text}
                //                     text={todo.text}
                //                     completed = {todo.completed}
                //                     onCompleted = {() => completeTodo(todo.text)}
                //                     onDelete={() => deleteTodo(todo.text)}
                //                     />  
                // )}
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
        
        {/* <TodoList>
            {error && <p>Error...</p>}
            {loading && <TodosLoading/>}

            {(!loading && !searchedTodos.length) && <p><EmptyTodos/></p>}

            {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text}
                text={todo.text}
                completed = {todo.completed}
                onCompleted = {() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />    
            ))}
        </TodoList> */}
        {
            !!openModal && (
            <Modal>
                <TodoForm addTodo={addTodo} setopenModal={setopenModal}/>
            </Modal>
        )} 
     
        <CreateTodoButton setopenModal={setopenModal} />
        <ChangeAlertWithStorageListener sincronize={sincronizeTodos}/>
    </React.Fragment>
  );
}

export default App;
