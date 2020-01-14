import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

class Search extends React.Component {
  handleChange = (event) => {
    this.props.searchList(event.currentTarget.value);
  };
  
  render() {
    return (
      <InputGroup className="padding">
        <InputGroup.Prepend>
          <InputGroup.Text id="ingredients-search">Search</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Ingredients Search" onChange={this.handleChange} />
      </InputGroup>
    );
  }
}

export default Search;