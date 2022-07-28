import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() 
{
 
  const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronize: sincronizeTodos,
        showListItems,
    
      } = useLocalStorage('TODOS_V1',[]);
    
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setopenModal] = useState(false);
      console.log(error)  ;
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

      const addTodo = (text) => {
        
        const newTodos = [...todos];
        newTodos.push({
          completed:false,
          text,
        })
        saveTodos(newTodos);
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
        saveTodos(newTodos);
      }
    
    
      useEffect(() => {
        console.log('use efect')
      }, [totalTodos]);// segundo parametro para saber cuando ejecuar el useEffect solo una vez pero si cuando  hay cambioos en el estado
 
    return (
       {
          totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          loading,
          error,
          openModal, 
          setopenModal,
          addTodo,
          sincronizeTodos,
          showListItems
          
        }
    );
}
 
export {useTodos};