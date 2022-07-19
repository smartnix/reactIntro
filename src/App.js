import React, { useState } from "react";
import { AppUI } from "./App/AppUI";


// import './App.css';


// const todosDefault = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Cortar Zanahoria', completed: false},
//   {text: 'Cortar papa', completed: true}
// ]


function useLocalStorage(itemName, initalValue) 
{
  
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

  const [item, setItem] = useState(parsedItem);

  const saveItem =  (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName,  stringifiedItem);
    setItem(newItem);
  }

  return [
    item,
    saveItem
  ];

}

function App() 
{

  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);

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

  return (
    <AppUI 
      totalTodos = {totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue} 
      setSearchValue={setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}

    />
  );
}

export default App;
