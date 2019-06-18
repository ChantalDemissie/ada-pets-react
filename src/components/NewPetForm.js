import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      species: '',
      about: '',
      image: '',
      location: '',
    };
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  onSpeciesChange = (event) => {
    this.setState({
      species: event.target.value,
    });
  }

  onAboutChange = (event) => {
    this.setState({
      about: event.target.value,
    });
  }

  onImageChange = (event) => {
    this.setState({
      image: event.target.value,
    });
  }

  onLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  }
  
  onFormSubmit = (event) => {
    event.preventDefault();

    const newPet = {
      // need to give id for new pet
      //stack overflow
      id: Math.floor((Math.random() * 1000) + 1),
      name: this.state.name,
      species: this.state.species,
      images: [this.state.image],
      location: this.state.location,
      about: this.state.about,
    }

    this.props.newPetCallback(newPet);
  }

  render() {
    return (
      <form className="new-pet-form" onSubmit={this.onFormSubmit}>
        <h3>Add a Pet</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            name="name" 
            onChange={this.onNameChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="species">Species:</label>
          <input 
            name="species" 
            onChange={this.onSpeciesChange}
            value={this.state.species}
          />
        </div>
        <div>
          <label htmlFor="about">About:</label>
          <textarea
            name="about" 
            onChange={this.onAboutChange}
            value={this.state.about}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input 
            name="location" 
            onChange={this.onLocationChange}
            value={this.state.location}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input 
            name="image" 
            onChange={this.onImageChange}
            value={this.state.image}
          />
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;