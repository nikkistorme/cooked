import React from 'react';
import {Jumbotron} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Cooked v1</h1>
        <p>A List of our Ingredients!</p>
      </Jumbotron>
    );
  }
}

export default Header;