import React, { useState, useEffect } from 'react';
import { data } from './data';
import Cards from './components/Cards';
import BarraBusqueda from './components/BarraBusqueda';
import Navbar from './components/Navbar';
import ModalDetalle from './components/ModalDetalle';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleReset = () => {
    setSearchTerm('');
    localStorage.removeItem('searchTerm');
    setFilteredData(data);
  };

  const handleFilter = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = data.filter((item) => {
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

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
    handleFilter();
  }, [searchTerm]);

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
    </div>
  );
};

export default App;
