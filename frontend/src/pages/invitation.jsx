import Polaroid from '@/components/Polaroid';
import React from 'react';
import Image from 'next/image';
import FixedTag from '@/components/invitationComponents/FixedTag';
import InvitationHeader from '@/components/invitationComponents/InvitationHeader';
import CountingComponent from '@/components/invitationComponents/CountingComponent';
import CardModel from '@/components/invitationComponents/CardModel';
import Ribbon from '@/components/invitationComponents/Ribbon';

const Invitation = () => {

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
      <FixedTag/>
      <InvitationHeader/>
      <CountingComponent/>
      <section className='overflow-hidden'>
        <img className="absolute top-[95%] left-[60%] w-[15rem] opacity-60 z-0" src="https://i.postimg.cc/RZJqqq4Z/pb2.png" alt="1" />
        <img className="absolute top-[90%] left-[3%] w-[22rem] opacity-30 z-0" src="https://i.postimg.cc/ZqrRFg9k/pb3.png" alt="2" />
        <img className="absolute top-[70%] left-[70%] w-[18rem] opacity-60 z-0" src="https://i.postimg.cc/CKy58YxH/pb4.png" alt="3" />
      </section>
      
      <section>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-items-center">
        <CardModel>
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
        </CardModel>

      <CardModel>
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
          -Confirmar asistencia
        </p>
      </CardModel>
    </section>
      </section>
      <Ribbon/>
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