import React from 'react';
import styled from 'styled-components';
import Shelf from './Shelf';

const ListOfShelves = styled.ul`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 3px solid lightgrey;
`;
class Shelves extends React.Component {
  render() {
    return (
      <ListOfShelves>
        {Object.keys(this.props.shelves).map( (key) =>
          <Shelf
            key={key}
            index={key}
            details={this.props.shelves[key]}
            deleteIngredient={this.props.deleteIngredient}
          />
        )}
      </ListOfShelves>
    );
  }
}

export default Shelves;