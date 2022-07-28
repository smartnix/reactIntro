import { useEffect, useReducer, useState } from "react";

function useLocalStorage(itemName, initalValue) 
{
  
  const [state, dispatch] = useReducer(reducer, initialState({initalValue}));
  const {
    showListItems,
    sincronized,
    loading,
    error,
    item,
  } = state;

  //ACTION CREATORS
  const onError = (error) =>{
    dispatch({type:actionTypes.error, payload:error})
  }

  const onSuccess = (parsedItem) => {
    dispatch({type:actionTypes.success, payload:parsedItem})
  }
  
  const onSave = (item) => {
    dispatch({type:actionTypes.save, payload:item})
  }

  const onSincronize = () => {
    dispatch({type:actionTypes.sincronized})

  }


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

          onSuccess(parsedItem);
         
      } catch (error) {
        onError(error);
      }

    },2000)
  }, [sincronized])

  const saveItem =  (newItem) => {

    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,  stringifiedItem);
      onSave(newItem);
      
    } catch (error) {
      onError(error);
    }
  }

  const sincronize = () => {
    onSincronize();
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronize,
    showListItems
  };

}

const actionTypes = {

  error: 'ERROR',
  success:'SUCCESS',
  save:'SAVE',
  sincronized:'SINCRONIZE',
}

const initialState = ({initalValue}) => (
{
  showListItems:false,
  sincronized:true,
  loading:true,
  error:false,
  item:initalValue,
});

const reducerObject = (state, payload) =>({
  [actionTypes.error]:{...state, error:true},
  [actionTypes.success]: {...state, 
                          error:false, 
                          loading:false, 
                          sincronized:true,
                          showListItems:true, 
                          item:payload
                        },
  [actionTypes.save]:{...state, item:payload},
  [actionTypes.sincronized]:{...state, 
                          loading:true, 
                          sincronized:false,
                          showListItems:false 
                          
  }
  
});

const reducer = (state, action) =>{

  return reducerObject(state, action.payload)[action.type] || state;

}
export {useLocalStorage}
