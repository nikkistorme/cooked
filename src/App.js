import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';

import Shelf from './components/Shelf';

class App extends Component {

  state = {
    shelves: [
      {
        name: 'spices',
        contents: ['cumin', 'pepper', 'salt', 'smoked paprika'],
        id: 1
      },
      {
        name: 'pantry',
        contents: ['peanut butter', 'oatmeal'],
        id: 2
      }
    ]
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Cooked v1</h1>
          <p>A List of our Ingredients!</p>
        </Jumbotron>
        {this.state.shelves.map( (shelf) =>
          <Shelf
            name={shelf.name}
            contents={shelf.contents}
            key={shelf.id}
          />
        )}
      </div>
    );
  }
}

export default App;
