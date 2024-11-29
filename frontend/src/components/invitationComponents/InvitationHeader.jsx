import React, { useState } from "react";
import EditingTag from "./EditingTag";
import TextEditor from "./TextEditor";

const InvitationHeader = () => {
  const [textValue, setTextValue] = useState("Sara & André");
  const [isEditing, setIsEditing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [colorEditing, setColorEditing] = useState('bg-white'); 
  const [textAlign, setTextAlign] = useState('text-center');
  const [textColor, setTextColor] = useState('')

  
  const handleBlur = () => {
    setIsEditing(false);
    setShowSettings(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      setShowSettings(false);
    }
  };
  const handleInfoFromChild = (color) => {
    setColorEditing(color)
  }

  const handleTextAlign = (value) => {
    setTextAlign(value)
  }



  return (
    <div className="relative">
      <EditingTag handleInfo={handleInfoFromChild}/>
      <div className={`${ colorEditing ? colorEditing : null} flex-1 flex justify-center flex-col relative`}>
        {isEditing ? 
        <TextEditor 
            handleBlur={handleBlur}
            handleKeyDown={handleKeyDown}
            handleTextAlign={handleTextAlign}
            currentTextAlign={textAlign}
            textValue={textValue}
            showSettings={showSettings}
            setShowSettings={setShowSettings}
            setTextValue={setTextValue}
            textColor={textColor}
            setTextColor={setTextColor}
            /> : (
          <h1
            className={`
              playfair
              p-[1rem]
              text-4xl
              transition-colors
              duration-300
              hover:border-2
              hover:border-black
              z-10
              relative
              outline-none
              cursor-pointer
              w-full
              ${ textAlign ? textAlign : null}
              ${ textColor ? textColor : null }
              `}
            onClick={() => setIsEditing(true)}
          > 
            {textValue}
          </h1>
        )}
        <img
          src="https://evnt.ar/boda/images/portadas/Pd2.jpg"
          alt='image'
          className='w-full h-auto object-cover'
        />
      </div>
        <div className="absolute inset-0 flex items-end justify-center">
        <div className='absolute items-end'>
            <img className='md:w-[600px] w-[300px]' src='https://i.postimg.cc/8P1P2Kqm/ph1.png' alt='ph1' />
        </div>
        <div className='w-full h-auto'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto fill-[#fff2f2]"
          >
              <path fill="#871c1c" fillOpacity="0.8" d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,113.3C672,120,768,101,864,101.3C960,101,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
               style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.9) 50px 54px 56px)' }} />
              <path d="M0,160L48,160C96,160,192,160,288,154.7C384,149,480,139,576,133.3C672,128,768,128,864,133.3C960,139,1056,149,1152,170.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>

          </svg>
            </div>
      </div>
    </div>
  );
};

export default InvitationHeader;
