import React from 'react'
import  '../styles/CreateTodoButton.css';
const CreateTodoButton = (props) => {

  const onClickButton  = () => {
    props.setopenModal(prevState => !prevState);
  }

  return (
    <div>
        <button className="CreateTodoButton"
          onClick={onClickButton }
        >
            +
        </button>
    </div>
  )
}

export  {CreateTodoButton}