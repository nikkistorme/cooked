import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

class AddIngredient extends React.Component {
  shelfRef = React.createRef();
  ingredientRef = React.createRef();

  createIngredient = (event) => {
    event.preventDefault();
    if (this.shelfRef.current.value && this.ingredientRef.current.value) {
      const ingredient = {
        shelf: this.shelfRef.current.value,
        name: this.ingredientRef.current.value
      };
      this.props.newIngredient(ingredient);
      event.currentTarget.reset();
    }
  }

  render() {
    return (
      <form className="padding" onSubmit={this.createIngredient} >
        <h2>Add New Ingredient</h2>
        <Row>
          <input type="text" placeholder="Name of Shelf" ref={this.shelfRef} />
          <input type="text" placeholder="Name of Ingredient" ref={this.ingredientRef} />
          <button variant="primary" type="submit">Add Ingredient</button>
        </Row>
      </form>
    );
  }
}

export default AddIngredient;