import React from 'react';

// import Search from './Search';
import Shelf from './Shelf';

class List extends React.Component {
  render() {
    // console.log(this.props.shelves);
    return (
      <div className="padding">
        <h4>Shelves</h4>
        {/* <Search searchList={this.props.searchList} /> */}
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

export default List;