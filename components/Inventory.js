import React, { Component } from 'react';
import base from '../lib/base.js';
import MyLoader from './MyLoader';
import AddIngredient from './AddIngredient';
import Shelves from './Shelves';

class Inventory extends Component {
  state = {
    shelves: {},
    recipes: {},
    status: 'loading'
  };
  componentDidMount() {
    console.log(this.state.status);
    this.shelvesRef = base.syncState(`/shelves`, {
      context: this,
      state: 'shelves',
      then() {
        this.setState({status: 'ready'});
        console.log(this.state.status);
      }
    });
    console.log('MOUNTED');
  }

  componentWillUnmount() {
    base.removeBinding(this.shelvesRef);
  }

  // function for making a new shelf
  makeNewShelf = (ingredient) => {
    const lowercase_shelf_name = ingredient.shelf.toLowerCase();
    const capital_case_shelf_name = lowercase_shelf_name[0].toUpperCase() + lowercase_shelf_name.substring(1);
    const newShelf = {
      name: capital_case_shelf_name,
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
    // console.log(ingredient);
    const shelves = {...this.state.shelves};
    Object.keys(shelves).forEach(shelf => {
      if (shelves[shelf].name.toLowerCase() === target_shelf.toLowerCase()) {
        // console.log(target_shelf);
        const original_shelf = shelves[shelf].contents;
        const revised_shelf = original_shelf.filter((item) => {
          return item !== ingredient;
        });
        if (revised_shelf.length === 0) {
          shelves[shelf] = null;
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
    // if (this.state.status == 'loading') {
    //   <p>Ingredients are loading</p>
    // }
    return (
      <section>
        <h1>Inventory</h1>
        {this.state.status === 'loading' ? <MyLoader /> : null}
        <div className={this.state.status === 'loading' ? 'hidden' : null}>
          <AddIngredient className={this.state.status === 'loading' ? 'hidden' : null}
            newIngredient={this.newIngredient} />
          <Shelves className={this.state.status === 'loading' ? 'hidden' : null}
            shelves={this.state.shelves}
            searchList={this.searchList}
            deleteIngredient={this.deleteIngredient} />
        </div>
      </section>
    )
  }
}

export default Inventory;