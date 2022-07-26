import React from "react";
import { AppUI } from "./App/AppUI";
import { TodoProvider } from "./TodoContext";


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
    return(
    <TodoProvider>
        <AppUI/>
    </TodoProvider>
  );
}

export default App;
