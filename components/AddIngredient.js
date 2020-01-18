import React from 'react';
import styled from 'styled-components';
import TextInput from './styles/TextInput';
import Button from './styles/Button';

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
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
        <h3>Add New Ingredient</h3>
        <AddContainer>
          <div>
            <TextInput type="text" placeholder="Name of Shelf" ref={this.shelfRef} />
            <TextInput type="text" placeholder="Name of Ingredient" ref={this.ingredientRef} />
          </div>
          <Button variant="primary" type="submit">Add Ingredient</Button>
        </AddContainer>
      </form>
    );
  }
}

export default AddIngredient;