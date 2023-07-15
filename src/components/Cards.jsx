import React from 'react';

const Cards = ({ data, handleOpenModal }) => {
  return (
    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
      {data.map((item) => (
        <div key={item.id} className="col mb-3">
          <div className="card text-bg-dark h-100">
            <img src={item.imagen} className="card-img-top" alt={item.titulo} />
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text fs-6 fw-normal">
                <span className="fw-semibold">Tipo:</span> {item.tipoEjercicio}
              </p>
              <p className="card-text fs-6 fw-normal">
                <span className="fw-semibold">Dificultad:</span> {item.dificultad}
              </p>
              <p className="card-text fs-6 fw-normal">
                <span className="fw-semibold">Objetivo:</span> {item.objetivo}
              </p>
              <p className="card-text fs-6 fw-normal">
                <span className="fw-semibold">Duración:</span> {item.duracion}
              </p>
              <button
                className="btn btn-warning stretched-link"
                onClick={() => handleOpenModal(item)}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
