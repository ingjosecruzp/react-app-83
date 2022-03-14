import React, { useState } from 'react'

export default function AddCategoria({ setCategorias }) {

  const [inputValue, setInputValue] = useState(''); //undefined

  const handleInputChange = (e) => {
     setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      
      if(inputValue.trim().length > 2)
      {
        setCategorias( cats => [inputValue,...cats]);
        setInputValue('');
      }
  }

  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            value = { inputValue }
            onChange = { handleInputChange }
        />
    </form>
  )
}
