import React, { useState } from 'react'

const useContador = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue)
    const incrementar = ()=> {setValue(value+1)};
    const reiniciar = ()=> {setValue(initialValue)}
    const decrementar = ()=> {setValue(value-1)}
  return {
    incrementar,
    reiniciar,
    decrementar,
    value
  }
}

export default useContador