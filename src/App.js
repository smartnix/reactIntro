import React, { useEffect, useState } from "react";
import { AppUI } from "./App/AppUI";


// import './App.css';


// const todosDefault = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Cortar Zanahoria', completed: false},
//   {text: 'Cortar papa', completed: true}
// ]


function useLocalStorage(itemName, initalValue) 
{
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const [item, setItem] = useState(initalValue);
  
  useEffect(() => {
    setTimeout(() => {

      try {
        
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if(!localStorageItem)
          {
            localStorage.setItem(itemName, JSON.stringify(initalValue));
            parsedItem = [];
          }
          else
          {
            parsedItem = JSON.parse(localStorageItem);
          }

          setItem(parsedItem);
          setLoading(false);
      } catch (error) {
        setError(error);
      }

    },2000)
  }, [])

  const saveItem =  (newItem) => {

    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,  stringifiedItem);
      setItem(newItem);
      
    } catch (error) {
      setError(error);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error
  };

}

function App() 
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
    <AppUI 
      totalTodos = {totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
      loading = {loading}
      error = {error}
    />
  );
}

export default App;
