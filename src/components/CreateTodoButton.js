import React from 'react'
import  '../styles/CreateTodoButton.css';
const CreateTodoButton = () => {
  return (
    <div>
        <button className="CreateTodoButton"
          onClick={() => console.log('1') }
        >
            +
        </button>
    </div>
  )
}

export  {CreateTodoButton}