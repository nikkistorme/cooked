import React from 'react';

class Shelf extends React.Component {
  deleteIngredient = (item) => {
    const shelf = this.props.details.name;
    this.props.deleteIngredient(shelf, item);
  };

  render() {
    return (
      <div className="shelf">
        <h3>{this.props.details.name}</h3>
        <div>
          {this.props.details.contents.map( (item, index) =>
            <div key={index}>
              {item}
              <span onClick={() => this.deleteIngredient(item)} style={{color: "red"}}>   delete</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Shelf;