import React, { useState } from 'react';
import EditingModal from './EditingModal';

const CardModel = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Acá va el contenido que se renderiza en el elemento, está separado del resto de la lógica para ser migrado dentro del modal
  const renderContent = () => (
    <>
      <img
        className="absolute z-[-3] w-[14rem] h-[14rem] object-cover transform -translate-x-1/2 -translate-y-1/2"
        src="https://i.postimg.cc/HxKP4Qfv/cc7.png"
        alt="Imagen detrás"
        style={{ top: '0', left: '0', transformOrigin: 'top left' }}
      />
      <img
        className="absolute z-2 w-[14rem] h-[14rem] object-cover transform -translate-x-1/2 -translate-y-1/2"
        src="https://i.postimg.cc/VLXHn044/cc11.png"
        alt="Imagen delante"
        style={{ top: '0', left: '0', transformOrigin: 'top left' }}
      />
      <div className="grid justify-center gap-2">{children}</div>
    </>
  );
// -----------------------------------

  return (
    <div className="relative bg-gray-200 p-6 min-w-[10rem] h-auto min-h-[10rem] rounded-lg">
      
      {renderContent()}

      {isModalOpen && (
        <EditingModal isOpen={isModalOpen} onClose={closeModal}>
          {/* El mismo contenido de la tarjeta, ahora dentro del modal */}
          {renderContent()}
        </EditingModal>
      )}
      <button
        className="btn btn-sm md:btn-md hover:bg-accent btn-primary text-white"
        onClick={openModal}
      >
        Abrir Modal
      </button>
    </div>
  );
};

export default CardModel;

  // const backImg = [
  //   'https://i.postimg.cc/mgGJ5yh0/cc5.png',
  //   'https://i.postimg.cc/k4Dpbjht/cc6.png',
  //   'https://i.postimg.cc/HxKP4Qfv/cc7.png',
  // ];
  // const frontImg = [
  //   'https://i.postimg.cc/sfQLfNhk/cc10.png',
  //   'https://i.postimg.cc/VLXHn044/cc11.png',
  //   'https://i.postimg.cc/Z5c7DkGd/cc12.png',
  //   'https://i.postimg.cc/bw8VTYBP/cc13.png',
  //   'https://i.postimg.cc/9fmSWXdb/cc8.png',
  //   'https://i.postimg.cc/g0g7r94W/cc9.png',
  // ];
