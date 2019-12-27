import React from 'react';
import {ListGroup} from 'react-bootstrap';

class Shelf extends React.Component {
  render() {
    return (
      <div className="shelf">
        <h3>{this.props.details.name}</h3>
        <ListGroup>
          {this.props.details.contents.map( (item, index) =>
            <ListGroup.Item key={index}>{item}</ListGroup.Item>
          )}
        </ListGroup>
      </div>
    );
  }
}

// const Shelf = props => {
//   return (
//     <div className="shelf">
//       <h3>{props.name}</h3>
//       <ListGroup>
//         {props.contents.map( (item, index) =>
//           <ListGroup.Item key={index}>{item}</ListGroup.Item>
//         )}
//       </ListGroup>
//     </div>
//   );
// }

export default Shelf;