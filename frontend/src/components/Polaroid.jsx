import React from 'react'

const Polaroid = () => {
  return (
    <div>
              <section className="flex justify-center items-center h-screen">
  <div className="bg-white shadow-lg p-4">
    {/* Borde superior */}
    <div className="h-4 bg-white"></div>
    
    <div className="flex justify-between items-center">
      {/* Borde izquierdo */}
      <div className="w-4 bg-white"></div>

      {/* Imagen central */}
      <img
        className="shadow-lg"
        src="https://st4.depositphotos.com/1017228/21207/i/450/depositphotos_212072892-stock-photo-portrait-happy-young-couple-hugging.jpg"
        alt="Polaroid"
      />

      {/* Borde derecho */}
      <div className="w-4 bg-white"></div>
    </div>

    {/* Borde inferior */}
    <div className="h-12 bg-white"><h5 className='playfair text-2xl'>&</h5></div>
  </div>
      </section>
    </div>
  )
}

export default Polaroid