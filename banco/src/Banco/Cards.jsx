import React, { useState } from 'react'
import '../styles/card.css'
import FormModal from './FormModal';

const Cards = ({imagen, contador, nombre}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
  return (
    <>
    <div className='contador-card'>
        <img src={imagen}
        alt="Imagen de usuario"
        />
        <h2>
            {contador.value} {nombre}
        </h2>
        <br />
        <button className='botones' onClick={()=>{contador.decrementar(); setIsModalOpen(true);}}>-1</button>
        <button className='botones' onClick={()=>{contador.incrementar(); setIsModalOpen(true);}}>+1</button>
    
    <FormModal 
    isOpen = {isModalOpen}
    onClose = {()=>setIsModalOpen(false)}
    />
    
    </div>
    </>
  )
}

export default Cards