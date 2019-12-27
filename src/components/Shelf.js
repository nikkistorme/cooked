import React from 'react';
import {ListGroup} from 'react-bootstrap';

const Shelf = ({name, contents}) => {
  return (
    <div className="shelf">
      <h3>{name}</h3>
      <ListGroup>
        {contents.map( (item, index) =>
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
}

export default Shelf;