import React from 'react'

const CountingClock = () => {
  return (
    <div>
        <section className="relative z-10 rounded-full w-[14rem] h-[14rem] flex flex-col items-center justify-center text-red">
            <div className="text-center mb-4">Vista Conteo Fecha📆</div>
                <div className="flex space-x-2 text-center">

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">15</span>
                    <span>días</span>
                </div>

                <div className="w-[2px] h-full bg-[#871c1c]"></div>

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">4</span>
                    <span>hs</span>
                </div>

                <div className="w-[2px] h-full bg-[#871c1c]"></div>

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">1</span>
                    <span>min</span>
                </div>

                <div className="w-[2px] h-full bg-[#871c1c]"></div>

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">49</span>
                    <span>seg</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CountingClock