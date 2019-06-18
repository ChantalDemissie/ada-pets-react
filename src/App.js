import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//
// this is standing in for api nonsense
import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petList: pets,
      currentPet: undefined,
    };
  }

  selectThisPet = (id) => {
    let newCurrentPet = this.state.petList.find(
      pet => pet.id === id
    );
    this.setState({currentPet: newCurrentPet});
  }

  removeThisPet = (id) => {
    // check if current pet is this pet
    // if so set it to undefined
    if (this.state.currentPet.id === id) {
      this.setState({currentPet: undefined});
    }

    // remove pet from the pet list
    const index = this.state.petList.findIndex(
      pet => pet.id === id);
    this.state.petList.splice(index, 1);
  }

  newPet = (pet) => {
    const pets = this.state.petList;
    pets.push(pet);
    // this has multiple key value pairs
    this.setState({petList: pets});
  }

  render() {
    const { petList, currentPet } = this.state;
    
    //if the pet is defined return pet details
    //if not return a empty string
    const petDetails = currentPet ? <PetDetails
      currentPet = {currentPet}
    /> : "";

    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>
        
        {petDetails}

        <section className="pet-list-wrapper">
          <PetList 
            pets = {petList}
            selectThisPetCallback = {this.selectThisPet}
            removeThisPetCallback = {this.removeThisPet}
          />
        </section>
        <section className="new-pet-form-wrapper">
          {/* use this to make the form show up */}
          <NewPetForm
            newPetCallback = {this.newPet}
          />
        </section>
      </main>
    );
  }
}

export default App;
