import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

import List from './components/List';
import AddIngredient from './components/AddIngredient';

class App extends Component {

  state = {
    shelves: {}
  }

  // function for making a new shelf
  makeNewShelf = (ingredient) => {
    const newShelf = {
      name: ingredient.shelf,
      contents: [ingredient.name],
    }
    return(newShelf);
  };
  
  newIngredient = (ingredient) => {
    console.log(ingredient);
    // take a copy of existing state
    const shelves = {...this.state.shelves};
    // find existing shelf, or make a new one
    if (Object.keys(shelves).length) {
      Object.keys(shelves).some(shelf => {
        if (shelves[shelf].name.toLowerCase() === ingredient.shelf.toLowerCase()) {
          // shelf exists already
          console.log('shelf exists');
          shelves[shelf].contents.push(ingredient.name);
          console.log(shelves[shelf]);
          return(true);
        } else {
          // shelf does not exist
          console.log('shelf does not exist')
          const newShelf = this.makeNewShelf(ingredient);
          shelves[`shelf${Date.now()}`] = newShelf;
        }
      });
    } else {
      const newShelf = this.makeNewShelf(ingredient);
      shelves[`shelf${Date.now()}`] = newShelf;
    }
    // push ingredient to state
    console.log(shelves);
    this.setState({ shelves });
  }

  render() {
    return (
      <div className="app-container">
        <Jumbotron>
          <h1>Cooked v1</h1>
          <p>A List of our Ingredients!</p>
        </Jumbotron>
        <AddIngredient newIngredient={this.newIngredient} />
        {/* <InputGroup className="padding">
          <InputGroup.Prepend>
            <InputGroup.Text id="ingredients-search">Search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Ingredients Search" />
        </InputGroup> */}
        <List shelves={this.state.shelves} />
      </div>
    );
  }
}

export default App;
