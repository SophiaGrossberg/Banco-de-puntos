import React from 'react'
import useContador from '../Hooks/useContador'
import fresa from '../assets/fresa.jpeg'
import limon from '../assets/limon.webp'
import Cards from './Cards'

const Banco = () => {
    const contador1 = useContador();
    const contador2 = useContador();
    const contador3 = useContador();
    const contador4 = useContador();
  return (
    <>
    <h1>Puntos</h1>
    <div style={{ display: "flex", gap: "20px" }}>
        <Cards 
        imagen={fresa}
        contador = {contador1}
        nombre= " puntos"
        />
        <Cards 
        imagen={limon}
        contador = {contador2}
        nombre=" puntos"
        />
    </div>
    <h1>Racha</h1>
    <div style={{ display: "flex", gap: "20px" }}>
        <Cards 
        imagen={fresa}
        contador = {contador3}
        nombre= " dias"
        />
        <Cards 
        imagen={limon}
        contador = {contador4}
        nombre=" dias"
        />
    </div>
    </>
  )
}

export default Banco