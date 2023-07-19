import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import BarraBusqueda from './components/BarraBusqueda';
import Navbar from './components/Navbar';
import ModalDetalle from './components/ModalDetalle';
import FormularioCreacion from './components/FormularioCreacion';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [exerciseData, setExerciseData] = useState([]);
  const [showFormulario, setShowFormulario] = useState(false);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleReset = () => {
    setSearchTerm('');
    localStorage.removeItem('searchTerm');
    setFilteredData(exerciseData);
  };

  const handleFilter = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = exerciseData.filter((item) => {
      return (
        item.tipoEjercicio.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.duracion.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.dificultad.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.titulo.toLowerCase().includes(lowerCaseSearchTerm)
      );
    });
    setFilteredData(filteredData);
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleToggleFormulario = () => {
    setShowFormulario(!showFormulario);
  };

  const agregarTarjeta = (nuevaTarjeta) => {
    setExerciseData((prevData) => [...prevData, nuevaTarjeta]);
    setFilteredData((prevData) => [...prevData, nuevaTarjeta]);
    handleCloseModal();
    localStorage.setItem('exerciseData', JSON.stringify([...exerciseData, nuevaTarjeta]));
  };

  const handleDeleteAll = () => {
    setExerciseData([]);
    setFilteredData([]);
    localStorage.removeItem('exerciseData');
  };

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const storedData = localStorage.getItem('exerciseData');
    if (storedData) {
      setExerciseData(JSON.parse(storedData));
      setFilteredData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="container-fluid">
      <Navbar />
      <BarraBusqueda
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        handleReset={handleReset}
        handleFilter={handleFilter}
      />
      <Cards data={filteredData} handleOpenModal={handleOpenModal} />
      {selectedItem && <ModalDetalle item={selectedItem} closeModal={handleCloseModal} />}
      {showFormulario && <FormularioCreacion agregarTarjeta={agregarTarjeta} cerrarFormulario={handleToggleFormulario} />}
      <div className="d-flex justify-content-center m-2">
        <div className='row g-2'>
          <button type="button" className="btn btn-lg btn-warning" onClick={handleToggleFormulario}>
            {showFormulario ? 'Cerrar Formulario' : 'Agregar Rutina'}
          </button>
          <button type="button" className="btn btn-lg btn-info" onClick={handleDeleteAll}>
            Borrar Rutinas
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;


