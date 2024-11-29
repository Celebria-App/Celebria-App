import React from 'react'

const FixedTag = () => {
  return (
    <div className="fixed top-[26rem] md:top-[8rem] flex items-center z-50 right-0 ">
        <div className="bg-[#871c1c] rounded-l-full w-12 h-12 flex items-center justify-center opacity-80">
        <div className="bg-[#876c6c] rounded-full w-8 h-8 flex items-center justify-center">
          <span role="img" aria-label="music" className="text-white text-2xl">
            🎶
          </span>
        </div>
        </div>
        <div className="bg-[#871c1c] h-12 w-24 flex items-center justify-center text-white font-bold">
          Música
        </div>
    </div>
  )
}

export default FixedTag