import React, { useState } from 'react';

const FormularioCreacion = ({ agregarTarjeta, cerrarFormulario }) => {
  const [imagen, setImagen] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipoEjercicio, setTipoEjercicio] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [duracion, setDuracion] = useState('');
  const [repeticiones, setRepeticiones] = useState('');
  const [descanso, setDescanso] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevaTarjeta = {
      imagen,
      titulo,
      descripcion,
      tipoEjercicio,
      dificultad,
      duracion,
      ejercicios: [
        { repeticiones, descanso }
      ],
      showAdditionalContent: false,
    };

    agregarTarjeta(nuevaTarjeta);

    setImagen('');
    setTitulo('');
    setDescripcion('');
    setTipoEjercicio('');
    setDificultad('');
    setDuracion('');
    setRepeticiones('');
    setDescanso('');
  };

  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-warning text-bg-dark">
          <div className="modal-header" data-bs-theme="dark">
            <h5 className="modal-title">Agregar Rutina</h5>
            <button type="button" className="btn-close" onClick={cerrarFormulario} />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="tituloInput" className="form-label">Título:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tituloInput"
                  value={titulo}
                  onChange={(event) => setTitulo(event.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionInput" className="form-label">Descripción:</label>
                <textarea
                  className="form-control"
                  id="descripcionInput"
                  value={descripcion}
                  onChange={(event) => setDescripcion(event.target.value)}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="tipoEjercicioInput" className="form-label">Tipo de Ejercicio:</label>
                <input
                  type="text"
                  className="form-control"
                  id="tipoEjercicioInput"
                  value={tipoEjercicio}
                  onChange={(event) => setTipoEjercicio(event.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dificultadInput" className="form-label">Dificultad:</label>
                <input
                  type="text"
                  className="form-control"
                  id="dificultadInput"
                  value={dificultad}
                  onChange={(event) => setDificultad(event.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="duracionInput" className="form-label">Duración:</label>
                <input
                  type="text"
                  className="form-control"
                  id="duracionInput"
                  value={duracion}
                  onChange={(event) => setDuracion(event.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="repeticionesInput" className="form-label">Repeticiones:</label>
                <input
                  type="text"
                  className="form-control"
                  id="repeticionesInput"
                  value={repeticiones}
                  onChange={(event) => setRepeticiones(event.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="descansoInput" className="form-label">Descanso:</label>
                <input
                  type="text"
                  className="form-control"
                  id="descansoInput"
                  value={descanso}
                  onChange={(event) => setDescanso(event.target.value)}
                  required
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-warning">Crear Tarjeta</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioCreacion;
