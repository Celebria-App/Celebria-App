import Polaroid from '@/components/Polaroid';
import React, {useState} from 'react';
import Image from 'next/image';

const Invitation = () => {
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
  const iconImg = [
    '/iconsFreepik/boda.png',
    '/iconsFreepik/arco-de-boda.png',
    '/iconsFreepik/arco-de-la-boda.png',
    '/iconsFreepik/baile (1).png',
    '/iconsFreepik/baile.png',
    '/iconsFreepik/banquete.png',
    '/iconsFreepik/iglesia.png',
    '/iconsFreepik/lugar-de-la-boda.png',
    '/iconsFreepik/paloma.png',
    '/iconsFreepik/salud.png',
    '/iconsFreepik/vestido-de-novia.png',
  ]

  return (
    <div className="relative overflow-hidden">
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



      <div className='relative'>
      <div className='p-8 bg-white flex-1 flex items-center justify-center flex-col relative'>
        <h1 className='playfair text-4xl'>Sara & André</h1>
        <img
          src="https://evnt.ar/boda/images/portadas/Pd2.jpg"
        // src='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2HUTRL4SDJHI7O7Z73PVPE4RAY.jpeg'
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
              <path fill="#871c1c" fill-opacity="0.8" d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,113.3C672,120,768,101,864,101.3C960,101,1056,128,1152,133.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
               style={{ filter: 'drop-shadow(rgba(0, 0, 0, 0.9) 50px 54px 56px)' }} />
              <path d="M0,160L48,160C96,160,192,160,288,154.7C384,149,480,139,576,133.3C672,128,768,128,864,133.3C960,139,1056,149,1152,170.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>

          </svg>
            </div>
        </div>
      </div>
      <section className="relative flex justify-center items-center h-screen cursor-pointer" onClick={handleIndex}>
      <section className="relative z-10 rounded-full w-[14rem] h-[14rem] flex flex-col items-center justify-center text-red">
  {/* Contenedor principal con el texto "Vista Conteo Fecha📆" */}
  <div className="text-center mb-4">Vista Conteo Fecha📆</div>

  {/* Contenedor para el conteo */}
  <div className="flex space-x-2 text-center">
    {/* 15 días */}
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">15</span>
      <span>días</span>
    </div>

    {/* Separador */}
    <div className="w-[2px] h-full bg-[#871c1c]"></div>

    {/* 4 hs */}
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">4</span>
      <span>hs</span>
    </div>

    {/* Separador */}
    <div className="w-[2px] h-full bg-[#871c1c]"></div>

    {/* 1 min */}
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">1</span>
      <span>min</span>
    </div>

    {/* Separador */}
    <div className="w-[2px] h-full bg-[#871c1c]"></div>

    {/* 49 seg */}
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold">49</span>
      <span>seg</span>
    </div>
  </div>
</section>        
        <img
          className="absolute z-0 w-[30rem] h-[30rem] object-cover"
          src={counterImg[counterIndex]}
          alt="Imagen de fondo"
        />
      </section>
      <section className='overflow-hidden'>
        <img className="absolute top-[95%] left-[60%] w-[15rem] opacity-60 z-0" src="https://i.postimg.cc/RZJqqq4Z/pb2.png" alt="1" />
        <img className="absolute top-[90%] left-[3%] w-[22rem] opacity-30 z-0" src="https://i.postimg.cc/ZqrRFg9k/pb3.png" alt="2" />
        <img className="absolute top-[70%] left-[70%] w-[18rem] opacity-60 z-0" src="https://i.postimg.cc/CKy58YxH/pb4.png" alt="3" />
      </section>

      <section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-items-center">
      {/* Primer div con las imágenes */}
      <div className="relative bg-gray-200 p-6 w-[20rem] h-auto min-h-[22rem] rounded-lg">
  {/* Imágenes en la esquina superior izquierda */}
  <img
    className="absolute z-[-3] w-[14rem] h-[14rem] transform -translate-x-1/2 -translate-y-1/2" // Imagen detrás del div
    src="https://i.postimg.cc/HxKP4Qfv/cc7.png"
    alt="Imagen detrás"
    style={{ top: '0', left: '0', transformOrigin: 'top left' }} // Alineación en la esquina superior izquierda
  />
  <img
    className="absolute z-20 w-[14rem] h-[14rem] transform -translate-x-1/2 -translate-y-1/2" // Imagen delante del div
    src="https://i.postimg.cc/VLXHn044/cc11.png"
    alt="Imagen delante"
    style={{ top: '0', left: '0', transformOrigin: 'top left' }} // Alineación en la esquina superior izquierda
  />
  <div className="grid justify-center gap-2">
        {iconImg.map((item, index) => (
          <Image 
            key={index}
            className="w-auto"
            src={item}
            alt={'icon' + index}
            width={20} // Ajusta el tamaño según sea necesario
            height={20} // Ajusta el tamaño según sea necesario
          />
        ))}
      </div>
</div>


      {/* Segundo div */}
      <div className="bg-gray-200 p-6 w-[20rem] h-auto min-h-[22rem] rounded-lg">
        <p><b>Estructura de una invitación:::::</b><br></br>
-Intro<br></br>
-Nombre de los casados<br></br>
-Presentación (Nos casamos)<br></br>
-Flecha para abajo o imagen de flores<br></br>
-Herramienta para agendar fechas y ver conteo<br></br>
-Infos sobre lugar, dress code, etc.<br></br>
-Foto y texto editable<br></br>
-Playlist, #Instagram, etc.<br></br>
-Album y carrete de fotos<br></br>
-Confirmar asistencia</p>
      </div>
    </section>
      </section>





      <section>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 120"  // Altura ajustada para hacer las ondas más finas
      className="w-full h-auto opacity-60"
    >
      {/* Primer lazo ondulado más fino */}
      <path
        fill="url(#grad1)"
        fillOpacity="1"
        d="M0,40L40,50C80,60,160,80,240,75C320,70,400,50,480,52C560,55,640,70,720,75C800,80,880,70,960,60C1040,50,1120,30,1200,25C1280,20,1360,40,1400,50L1440,60L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"
      ></path>
       <path
        fill="url(#grad2)"
        fillOpacity="1"
        d="M0,60L60,55C120,50,240,40,360,35C480,30,600,30,720,40C840,50,960,60,1080,65C1200,70,1320,70,1380,60L1440,50L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
      ></path>

      {/* Definición de gradientes */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#f48fb1", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ec407a", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#ec407a", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#880e4f", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
      </section>
      <Polaroid/>
    </div>
  );
};

export default Invitation;
// <a href="https://www.flaticon.es/iconos-gratis/boda" title="boda iconos">Boda iconos creados por Liara Studio - Flaticon</a>
{/* <a href="https://www.flaticon.es/iconos-gratis/boda" title="boda iconos">Boda iconos creados por Freepik - Flaticon</a> */}
// <a href="https://www.flaticon.es/iconos-gratis/boda" title="boda iconos">Boda iconos creados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/boda" title="boda iconos">Boda iconos creados por Smashicons - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/boda" title="boda iconos">Boda iconos creados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/decoracion" title="decoración iconos">Decoración iconos creados por Eucalyp - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/decoracion" title="decoración iconos">Decoración iconos creados por Eucalyp - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/banquete" title="banquete iconos">Banquete iconos creados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/corazon" title="corazón iconos">Corazón iconos creados por Muhammad_Usman - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/decoracion" title="decoración iconos">Decoración iconos creados por Freepik - Flaticon</a>
// <a href="https://www.flaticon.es/iconos-gratis/vestido" title="vestido iconos">Vestido iconos creados por Sir.Vector - Flaticon</a>