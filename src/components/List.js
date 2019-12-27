import React from 'react';

import Shelf from './Shelf';

class List extends React.Component {
  render() {
    // console.log(this.props.shelves);
    return (
      <div className="padding">
        <ul>
          {Object.keys(this.props.shelves).map( (key) =>
            <Shelf
              key={key}
              index={key}
              details={this.props.shelves[key]}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default List;