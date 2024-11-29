import React, { useState, useEffect } from 'react'

const CountingClock = () => {
    const eventDate = new Date('Mon Dec 4 2024 15:24:12 GMT-0500 (Eastern Standard Time)');
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now; 

    if (difference <= 0) {
      setTimeLeft("¡El evento ha comenzado!");
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setDaysLeft(days);
    setHoursLeft(hours);
    setMinutesLeft(minutes);
    setSecondsLeft(seconds);
  };

  // Actualiza el tiempo restante cada segundo
  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    
    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

     
  return (
    <div>
        <section className="relative z-10 rounded-full w-[14rem] h-[14rem] flex flex-col items-center justify-center text-red">
            <div className="text-center mb-4">Vista Conteo Fecha📆</div>
                <div className="flex space-x-2 text-center">

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">{daysLeft}</span>
                    <span>días</span>
                </div>

                <div className="w-[2px] h-full bg-[#871c1c]"></div>

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">{hoursLeft}</span>
                    <span>hs</span>
                </div>

                <div className="w-[2px] h-full bg-[#871c1c]"></div>

                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">{minutesLeft}</span>
                    <span>m</span>
                </div>

                <div className="w-[2px] h-full bg-[#871c1c]"></div>
                
                <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold">{secondsLeft}</span>
                    <span>s</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CountingClock