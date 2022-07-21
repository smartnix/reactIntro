import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = createContext();

function TodoProvider(props) 
{
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    
      } = useLocalStorage('TODOS_V1',[]);
    
      const [searchValue, setSearchValue] = useState('');
    
      const completedTodos = todos.filter(todos => !!todos.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1)
      {
        searchedTodos = todos;
      }
      else
      {
        searchedTodos = todos.filter(todo =>{
          const todoText = todo.text.toLowerCase();
         
          const searchText = searchValue.toLocaleLowerCase();
    
          return todoText.includes(searchText);
    
        })
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
    
        // todos[todoIndex] = {text:todos[todoIndex].text,completed:true}
        newTodos[todoIndex].completed = true;
        console.log(newTodos);
        saveTodos(newTodos);
      }
    
      
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
    
        // todos[todoIndex] = {text:todos[todoIndex].text,completed:true}
        newTodos.splice(todoIndex,1);
        console.log(newTodos);
        saveTodos(newTodos);
      }
    
    
      useEffect(() => {
        console.log('use efect')
      }, [totalTodos]);// segundo parametro para saber cuando ejecuar el useEffect solo una vez pero si cuando  hay cambioos en el estado
 
    return (
        <TodoContext.Provider 
        value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

 
export {TodoContext, TodoProvider};