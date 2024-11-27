import { useState } from 'react'

export const AddCategory = ({onAddNewCategory}) => {
    
    const [ inputValue,setInputValue ] =useState(''); 

    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        if(  inputValue.trim().length <=1 ) return ;
        onAddNewCategory(  inputValue );
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Buscar gifts" value={inputValue} onChange={onInputChange} />
    </form>
  
  )
}
