import React, { useEffect, useState } from "react";

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

export {useLocalStorage}
