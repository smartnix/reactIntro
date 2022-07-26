import React, { useContext } from 'react'
import  '../styles/TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue}) => {

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