import React from 'react'
import Ribbon from './Ribbon';

const EditingModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20 flex-col">
      <div className="relative bg-white rounded-lg p-6 w-full md:w-1/2">
        <div className="w-full flex justify-between">
          <h2 className="text-2xl mb-4">Modificando Elemento 🖌</h2>
          <button
            className="text-white btn btn-sm bg-red-600 flex justify-center items-center hover:bg-red-300 text-center"
            onClick={onClose}
          >
            x
          </button>
        </div>
        <div>
            {children}
        </div>
      <Ribbon/>
      </div>
    </div>
  )
}

export default EditingModal
