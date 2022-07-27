import React from 'react'
import  '../styles/TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue, loading}) => {

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  }
  
  return (
    <input 
      className="TodoSearch" 
      placeholder="Cebolla" 
      value={searchValue}
      onChange={onSearchValueChange}
      disabled = {loading}
      />
  )
}

export  {TodoSearch}