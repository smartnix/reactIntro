import React from "react";
import { AppUI } from "./App/AppUI";
import { TodoProvider } from "./TodoContext";



// import './App.css';


// const todosDefault = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Cortar Zanahoria', completed: false},
//   {text: 'Cortar papa', completed: true}
// ]



function App() 
{
    return(
    <TodoProvider>
        <AppUI/>
    </TodoProvider>
  );
}

export default App;
