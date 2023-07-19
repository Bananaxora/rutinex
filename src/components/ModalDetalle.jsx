import React from 'react';

const ModalDetalle = ({ item, closeModal }) => {
  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-warning text-bg-dark">
          <div className="modal-header" data-bs-theme="dark">
            <p className="modal-title fs-1 fst-italic">{item.titulo}</p>
            <button type="button" className="btn-close" onClick={closeModal} />
          </div>
          <div className="modal-body">
            <p className='h5'>{item.descripcion}</p>
            <ul>
              {item.ejercicios.map((ejercicio, index) => (
                <li key={index}>
                  <hr />
                  <p className='h5'>Repeticiones:</p> <span className='fs-4'>{ejercicio.repeticiones}</span>
                  <hr />
                  <p className='h5'>Descanso:</p> <span className='fs-4'>{ejercicio.descanso}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalle;
