import React, { useEffect, useState } from "react";
import CarCard from './components/CarCard'
import Pagination from './components/Pagination'
import SearchBar from "./components/SearchBar";
import carsData from './data/cars.json'

const App = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  useEffect(() => {
    setCars(carsData);
  }, []);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleSearch = (searchText) => {
    const filteredCars = carsData.filter((car) =>
      car.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setCars(filteredCars);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(cars.length / carsPerPage);

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <div className="car-list">
        {currentCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;