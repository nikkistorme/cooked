import React from 'react';
import Shelf from './Shelf';

class Shelves extends React.Component {
  render() {
    return (
      <div>
        <h4>Shelves</h4>
        <div>
          <ul>
            {Object.keys(this.props.shelves).map( (key) =>
              <Shelf
                key={key}
                index={key}
                details={this.props.shelves[key]}
                deleteIngredient={this.props.deleteIngredient}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Shelves;