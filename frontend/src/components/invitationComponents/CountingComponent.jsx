import React, { useState } from 'react'
import CountingClock from './CountingClock'

const CountingComponent = () => {
    const [counterIndex, setCounterIndex] = useState(0)
    const counterImg = [
      'https://i.postimg.cc/gJy6vLvm/cc1.png',
      'https://i.postimg.cc/FRXLdVkT/cc2.png',
      'https://i.postimg.cc/mk8znxXn/cc3.png',
      'https://i.postimg.cc/VvY04sRM/cc4.png'
    ]
    const handleIndex = ()=> {
      if ((counterImg.length -1) > counterIndex) {
        setCounterIndex(counterIndex + 1)
      } else {
        setCounterIndex(0);
      }
    }
  return (
    <div>
        <section className="relative flex justify-center items-center h-screen cursor-pointer" onClick={handleIndex}>
            <CountingClock/>        
            <img
            className="absolute z-0 w-[30rem] h-[30rem] object-cover"
            src={counterImg[counterIndex]}
            alt="Imagen de fondo"
            />
      </section>
    </div>
  )
}

export default CountingComponent