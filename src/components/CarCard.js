import React from 'react';
import './CarCard.css';
import { FaGasPump, FaUser, FaTachometerAlt, FaCar, FaHeart } from 'react-icons/fa';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';
import car4 from '../assets/car4.jpg';
import car5 from '../assets/car5.jpg';
import car6 from '../assets/car6.jpg';
import car7 from '../assets/car7.jpg';
import car8 from '../assets/car8.jpg';
import car9 from '../assets/car9.jpg';
import car10 from '../assets/car10.jpg';

const CarCard = ({ car }) => {
  // Use the imported images directly
  const carImage = car.image === 'car1.jpg' ? car1 :
                  car.image === 'car2.jpg' ? car2 :
                  car.image === 'car3.jpg' ? car3 :
                  car.image === 'car4.jpg' ? car4 :
                  car.image === 'car5.jpg' ? car5 :
                  car.image === 'car6.jpg' ? car6 :
                  car.image === 'car7.jpg' ? car7 :
                  car.image === 'car8.jpg' ? car8 :
                  car.image === 'car9.jpg' ? car9 :
                  car.image === 'car10.jpg' ? car10 : null;

  if (!carImage) {
    // Handle the case where the image is not found
    return <div className="car-card">Image not found</div>;
  }

  return (
    <div className="car-card">
      <img src={carImage} alt={car.name} />
      <div className="car-details">
        <div className="car-title">
          <h3>{car.name}</h3>
        </div>
        <div className="car-year">
          <h4>{car.modelYear}</h4>
        </div>
      </div>
      <div className="car-info-upper">
        <div className="car-capacity">
          <FaUser /> <span>4 people</span>
        </div>
        <div className="car-fuel">
          <FaGasPump /> <span>{car.fuelType}</span>
        </div>
      </div>
      <div className="car-info-lower">
        <div className="car-milage">
          <FaTachometerAlt /> <span>{car.averageFuelConsumption}</span>
        </div>
        <div className="car-type">
          <FaCar /> <span>{car.type}</span>
        </div>
      </div>
      <div className="car-bottom">
        <div className="car-price">
          <p>${car.rentPricePerMonth}/month</p>
        </div>
        <div className="like">
          <FaHeart className="heart-icon" />
          <button>Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
