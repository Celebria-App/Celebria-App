import React, { useState, useEffect, useRef} from 'react'

const TextEditor = ({
    handleBlur,
    handleKeyDown,
    handleTextAlign,
    textValue,
    showSettings,
    setShowSettings,
    currentTextAlign,
    setTextValue,
    textColor,
    setTextColor
}) => {
  const editableRef = useRef(null);
  const [selectedText, setSelectedText] = useState(null);
  const [textAlign, setTextAlign] = useState(currentTextAlign);

  const handleTextSelection = () => {
    setSelectedText(window.getSelection().toString())
    if (selectedText) {
      console.log('Texto seleccionado:', selectedText);
    }
  };

  // Opcion 1 🎁
  const handleTextStyle = () => {
    if (selectedText) {
      const startIndex = textValue.indexOf(selectedText);
      const endIndex = startIndex + selectedText.length;

      if (startIndex !== -1) {
        const before = textValue.slice(0, startIndex);
        const after = textValue.slice(endIndex);
        setTextValue(
          <>
            {before}
            <b>{selectedText}</b>
            {after}
          </>
        );

        setSelectedText(null); // Limpia la selección
      }
    }
  }





  const textAlignFunction = (value) => {
    handleTextAlign(value);
    setTextAlign(value);
  }

  const ref = useRef(null);
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleBlur(); 
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
 
      return () => {
        // Limpia el listener al desmontar el componente
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <div className="relative" ref={ref}>
    <div
      type="text"
      className={`playfair p-[1rem] text-4xl ${textAlign} ${textColor} transition-colors duration-300 border-2 border-black outline-none z-10 relative bg-transparent w-full`}
      ref={editableRef}
      contentEditable
      suppressContentEditableWarning
      onChange={(e) => {setTextValue(e.target.innerText)}}
      onKeyDown={handleKeyDown}
      onMouseUp={handleTextSelection}
      autoFocus
      onFocus={() => setShowSettings(true)}
    > { textValue } </div>
    {showSettings && (
    <div className=" absolute top-full transform -translate-x-1/2 left-1/2 bg-white shadow-l grounded-md border border-gray-300 z-50 flex items-center justify-between min-w-40 h-12 px-2 cursor-pointer">
    <div onClick={() => handleTextStyle('b')} className="text-xl font-semibold rounded-[3px] flex items-center justify-center hover:bg-black hover:text-white w-10 h-10 cursor-pointer">
      <b>B</b>
    </div>
    <div onClick={() => handleTextStyle('i')} className="text-xl font-semibold rounded-[3px] flex items-center justify-center hover:bg-black hover:text-white w-10 h-10 cursor-pointer">
      <i>I</i>
    </div>
    <div onClick={() => handleTextStyle('u')} className="text-xl font-semibold rounded-[3px] flex items-center justify-center hover:bg-black hover:text-white w-10 h-10 cursor-pointer">
      <u>U</u>
    </div>
    <div onClick={()=> textAlignFunction('text-start')} className="text-xl font-semibold rounded-[3px] flex items-center justify-center hover:bg-[#cbd5e1] w-10 h-10 cursor-pointer">
      <img className='w-6 h-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1UlEQVR4nO3ZKwoCURiG4Ve8ZE1ms0VtWt2B4B4MFhGjNi8YTboUbWZXYJEJ7sEiHBGMyjBwbjLfA38/7zADP2dAREREvioCY+AQYHZAH0u2gAk4T6BrI+QSOMQAMxsh88ARD6BlI6QADIE1sPE8C6BtI0JERMSWKlCLbKpZAjpAEsG+ZX5M8jljqlMEhzUpc8xVSC/yV+uWdbH8+49dRETEhgGwcnDlMwHqeDJ1vGZcgZKPkLOHnanpI2TpOOIOVHyElIERsHfw6+D9kBo+IkRERHLnBeguj/2v/uGzAAAAAElFTkSuQmCC" alt="align-left"/>
    </div>

    <div onClick={()=> textAlignFunction('text-center')} className="text-xl font-semibold rounded-[3px] flex items-center justify-center hover:bg-[#cbd5e1] w-10 h-10 cursor-pointer">
      <img className='w-6 h-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXElEQVR4nO3WMQqAQBBD0X88d+5fuyDeY8RWELac0f8gfdIFJEn6mAAmkMUygbEy4ChQNl9y/mLAAPYCZfORu9O2MkCSpNbCM4dnLj1zkiR1FZ45PHPpmZMkiQYuyL/S0qwKP1oAAAAASUVORK5CYII=" alt="align-justify"/>
    </div>

    <div onClick={()=> textAlignFunction('text-end')} className="text-xl font-semibold rounded-[3px] flex items-center justify-center hover:bg-[#cbd5e1] w-10 h-10 cursor-pointer">
      <img className='w-6 h-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzklEQVR4nO3ZMQ4BQRjF8b+4wEpcgBOgo3UGDkGh09EoiFLnKBxBuQeQjUtoJCObbMsgszsz9v2SV+98mZ1k8gZERETkZ2PgABw9ZA40cWAIPADjMXsXgyw9D2GAi4tBesDd8yArHOkDa2BXcbbABGi4GkRERMQmAVqBJflm2wZAFsB9yrxIVqzR6hzAYo0lp1oNMgr817oWl9b6HHYRERHf2sCipDpoWlUdlH8kjaWge6cTS2VqkzfltxhK7E90gU1JzwozV88KIiIif+cJQBCP/P8ebvMAAAAASUVORK5CYII=" alt="align-right"/>
    </div>
    <div className="bg-black m-1 bg-opacity-50 rounded-[3px] w-8 h-8 flex items-center justify-center overflow-hidden space-between">
        <div onClick={()=> setTextColor('text-white')} className="bg-white w-full h-full hover:border-2 hover:rounded-[2px] hover:border-[#876c6c] outline-none"/>
    </div>
    <div className="bg-black m-1 bg-opacity-50 rounded-[3px] w-8 h-8 flex items-center justify-center overflow-hidden">
        <div onClick={()=> setTextColor('text-[#475569]')}  className="bg-[#475569] w-full h-full hover:border-2 hover:rounded-[2px] hover:border-[#876c6c] outline-none"/>
    </div>
    <div className='bg-black bg-opacity-30 cursor-pointer rounded-[5px] w-10 h-10 flex items-center justify-center opacity-80 cursor-pointer'>
      <span role="img" aria-label="color" className="text-white text-xl flex items-center justify-center">
      🖌
      </span>
    </div>
  </div>
    )}
  </div>
  )
}

export default TextEditor

 // Otra opcion para el handleTextStyle
  // const handleTextStyle = (value) => {
  //    // Encuentra el índice de inicio del texto seleccionado
  //    if(selectedText){
  //     const startIndex = textValue.indexOf(selectedText);
  //     if (startIndex !== -1) {
  //       const before = textValue.slice(0, startIndex);
  //       const after = textValue.slice(startIndex + selectedText.length);
  
  //       // Crea un elemento <b> para el texto seleccionado
  //       const boldElement = document.createElement(value);
  //       boldElement.textContent = selectedText;
  
  //       // Reemplaza el contenido del div editable
  //       // const container = document.getElementById('monolink');
  //       const container = editableRef.current
  //       container.innerHTML = ''; // Limpia el contenido actual
  //       container.append(before);
  //       container.append(boldElement);
  //       container.append(after);
  //       console.log('🎀')
  //       console.log(editableRef.current.innerHTML) //importante saber el innerHTML
  //       // setTextValue(editableRef.current.innerHTML)
  //       console.log(before)
  //       console.log(after)
  //       console.log(selectedText)
  //       console.log(<>
  //       {before}
  //       <b>{selectedText}</b>
  //       {after}
  //       </>)
  //    }
  //   }
  // }

