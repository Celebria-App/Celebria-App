import React, {useState, useEffect, useRef } from 'react'

const EditingTag = ({handleInfo}) => {
    const [colorEditing, setColorEditing] = useState(false)
    const ref = useRef(null);
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setColorEditing(false); 
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
 
      return () => {
        // Limpia el listener al desmontar el componente
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const renderColorEditing = () => (
    <div ref={ref} className="transition-all duration-300 ease-in-out bg-black bg-opacity-50 h-10 w-auto flex  rounded-l-[5px] items-center justify-center text-white font-bold">
        <div className="bg-black m-1 bg-opacity-50 rounded-[3px] w-8 h-8 flex items-center justify-center overflow-hidden space-between">
        <div onClick={()=> handleInfo('bg-white')} className="bg-white w-full h-full hover:border-2 hover:rounded-[2px] hover:border-[#876c6c] outline-none">
        </div>
        </div>
        <div className="bg-black m-1 bg-opacity-50 rounded-[3px] w-8 h-8 flex items-center justify-center overflow-hidden">
        <div onClick={()=> handleInfo('bg-[#475569]')}  className="bg-[#475569] w-full h-full hover:border-2 hover:rounded-[2px] hover:border-[#876c6c] outline-none">
        </div>
        </div>
        <div className="bg-black m-1 bg-opacity-50 rounded-[3px] w-8 h-8 flex items-center justify-center overflow-hidden">
        <div onClick={()=> handleInfo('bg-[#871c1c]')} className="bg-[#871c1c] w-full h-full hover:border-2 hover:rounded-[2px] hover:border-[#876c6c] outline-none">
        </div>
        </div>
    </div>
    )
  return (
    <div className="absolute m-4 flex items-center z-50 left-0 ">
  <div
        className={`${
          colorEditing ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300 ease-in-out`}
      >
        {colorEditing && renderColorEditing()}
      </div>
      
      <div
        onClick={() => setColorEditing(!colorEditing)}
        className={`bg-black bg-opacity-30 cursor-pointer ${
          colorEditing ? 'rounded-r-[5px]' : 'rounded-[5px]'
        } w-10 h-10 flex items-center justify-center opacity-80`}
      >
      <span role="img" aria-label="music" className="text-white text-xl flex items-center justify-center">
        🖌
      </span>
    </div>
    <div
        onClick={() => setColorEditing(!colorEditing)}
        className={`bg-black bg-opacity-30 cursor-pointer ${
          colorEditing ? 'rounded-r-[5px]' : 'rounded-[5px]'
        } w-10 h-10 flex items-center justify-center opacity-80 ml-[3px]`}
      >
      <span role="img" aria-label="music" className="text-white text-xl flex items-center justify-center">
        🖼
      </span>
    </div>
    <div
        onClick={() => setColorEditing(!colorEditing)}
        className={`bg-black bg-opacity-30 cursor-pointer ${
          colorEditing ? 'rounded-r-[5px]' : 'rounded-[5px]'
        } w-10 h-10 flex items-center justify-center opacity-80 ml-[3px]`}
      >
      <span role="img" aria-label="music" className="text-white text-xl flex items-center justify-center">
        ⁝
      </span>
    </div>
    </div>
  )
}

export default EditingTag

// useRef:

// Crea una referencia (ref) para asociar con el componente (en este caso, el menú desplegable).
// document.addEventListener("mousedown", handleClickOutside):

// Escucha todos los clics en el documento.
// !ref.current.contains(event.target):

// Comprueba si el clic ocurrió fuera del elemento referenciado.
// useEffect Cleanup:

// Elimina el Event Listener al desmontar el componente para evitar fugas de memoria.
