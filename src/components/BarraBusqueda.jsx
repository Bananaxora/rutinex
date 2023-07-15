import React from 'react';

const BarraBusqueda = ({ searchTerm, handleSearch, handleReset, handleFilter }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleFilter();
    }
  };

  return (
    <div className="mb-3 mt-3">
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Buscar ejercicios por categoría o título..."
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyPress}
      />
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-warning fw-semibold mt-3" type="button" onClick={handleReset}>
          Resetear busqueda
        </button>
      </div>
    </div>
  );
};

export default BarraBusqueda;
