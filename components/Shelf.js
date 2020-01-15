import React from 'react';
import styled from 'styled-components';

const ShelfContainer = styled.li`
  border-left: 3px solid lightgrey;
  border-radius: 10px;
  padding: 0 10px;
`;

const ShelfItem = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    color: red;
    cursor: pointer;
    font-size: 100%;
    border: 0;
    padding: 0;
    background: none;
  }
`;

class Shelf extends React.Component {
  deleteIngredient = (item) => {
    const shelf = this.props.details.name;
    this.props.deleteIngredient(shelf, item);
  };

  render() {
    return (
      <ShelfContainer className="shelf">
        <h3>{this.props.details.name}</h3>
        <div>
          {this.props.details.contents.map( (item, index) =>
            <ShelfItem key={index}>
              {item}
              <button onClick={() => this.deleteIngredient(item)}>delete</button>
            </ShelfItem>
          )}
        </div>
      </ShelfContainer>
    );
  }
}

export default Shelf;