import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';

const PetList = (props) => {

  let petCards = props.pets.map(pet => <PetCard 
    id = {pet.id}
    name = {pet.name}
    species = {pet.species}
    about = {pet.about}
    location = {pet.location}
    selectThisPetCallback = {props.selectThisPetCallback}
    removeThisPetCallback = {props.removeThisPetCallback}
  />);

  return (
    <div className="card-group">
      {petCards}
    </div>
  );
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  selectThisPetCallBack: PropTypes.func,
};

export default PetList;
