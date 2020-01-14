import React, { Component } from 'react';
import AddIngredient from './AddIngredient';
import Shelves from './Shelves';

class Inventory extends Component {
  state = {
    shelves: {},
    recipes: {}
  }

  // function for making a new shelf
  makeNewShelf = (ingredient) => {
    const newShelf = {
      name: ingredient.shelf,
      contents: [ingredient.name],
    }
    return(newShelf);
  };
  
  // function for adding an ingredient
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
          return(true);
        }
      });
    } else {
      const newShelf = this.makeNewShelf(ingredient);
      shelves[`shelf${Date.now()}`] = newShelf;
    }
    // push ingredient to state
    console.log(shelves);
    this.setState({ shelves });
  };

  deleteIngredient = (target_shelf, ingredient) => {
    console.log(ingredient);
    const shelves = {...this.state.shelves};
    Object.keys(shelves).some(shelf => {
      if (shelves[shelf].name.toLowerCase() === target_shelf.toLowerCase()) {
        // console.log(target_shelf);
        const original_shelf = shelves[shelf].contents;
        const revised_shelf = original_shelf.filter((item) => {
          return item !== ingredient;
        });
        if (revised_shelf.length === 0) {
          delete shelves[shelf];
        } else {
          shelves[shelf].contents = revised_shelf;
        }
        this.setState({ shelves });
      } else {
        return(true);
      }
    });
  };

  render() {
    return (
      <section>
        <h1>Inventory</h1>
        <AddIngredient newIngredient={this.newIngredient} />
        <Shelves shelves={this.state.shelves} searchList={this.searchList} deleteIngredient={this.deleteIngredient} />
      </section>
    )
  }
}

export default Inventory;