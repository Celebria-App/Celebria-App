import React from 'react';


const Invitation = () => {
  return (
    <div className="relative">
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

      <section className="relative flex justify-center items-center h-screen">
        <div className="relative z-10 rounded-full w-[14rem] h-[14rem] flex items-center justify-center text-red">
          Vista Conteo Fecha📆
        </div>
        
        <img
          className="absolute z-0 w-[24rem] h-[24rem] object-cover"
          src="https://www.fixdate.io/modelo-invitacion/115/img/img_circuloContador01.png"
          alt="Imagen de fondo"
        />
      </section>
      <section className='overflow-hidden'>
        <img className="absolute top-[95%] left-[60%] w-[15rem] opacity-60 z-0" src="https://i.postimg.cc/RZJqqq4Z/pb2.png" alt="1" />
        <img className="absolute top-[90%] left-[3%] w-[22rem] opacity-30 z-0" src="https://i.postimg.cc/ZqrRFg9k/pb3.png" alt="2" />
        <img className="absolute top-[70%] left-[70%] w-[18rem] opacity-60 z-0" src="https://i.postimg.cc/CKy58YxH/pb4.png" alt="3" />
      </section>
    </div>
  );
};

export default Invitation;
