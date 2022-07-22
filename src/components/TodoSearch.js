import React, { useContext } from 'react'
import  '../styles/TodoSearch.css';
import { TodoContext } from '../TodoContext';

const TodoSearch = () => {

  const {searchValue, setSearchValue} = useContext(TodoContext);
  
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }
  
  return (
    <input 
      className="TodoSearch" 
      placeholder="Cebolla" 
      value={searchValue}
      onChange={onSearchValueChange}
      />
  )
}

export  {TodoSearch}