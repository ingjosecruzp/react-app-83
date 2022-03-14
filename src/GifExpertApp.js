import React, { useState } from 'react'
import AddCategoria from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categorias,setCategorias] = useState(['Milan']);

  /*const handleAdd = () => {
        setCategorias([...categorias,'Londres']);
  }*/

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategoria setCategorias= { setCategorias }/>
        <hr/>

        <ol>
            {
                categorias.map( categoria => {
                     return <GifGrid 
                              key= { categoria }
                              categoria= { categoria }
                            />
                })
            }
        </ol>
    </>
  )
}
