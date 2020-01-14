import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';

class AddIngredient extends React.Component {
  shelfRef = React.createRef();
  ingredientRef = React.createRef();

  createIngredient = (event) => {
    event.preventDefault();
    if (this.shelfRef.current.value && this.ingredientRef.current.value) {
      const ingredient = {
        shelf: this.shelfRef.current.value,
        name: this.ingredientRef.current.value
      };
      this.props.newIngredient(ingredient);
      event.currentTarget.reset();
    }
  }

  render() {
    return (
      <Form className="padding" onSubmit={this.createIngredient} >
        <h4>Add New Ingredient</h4>
        <Form.Row>
          {/* <Col>
            <h4>Add New Ingredient</h4>
          </Col> */}
          <Col>
            <Form.Control type="text" placeholder="Name of Shelf" ref={this.shelfRef} />
          </Col>
          <Col>
            <Form.Control type="text" placeholder="Name of Ingredient" ref={this.ingredientRef} />
          </Col>
          <Col>
            <Button variant="primary" type="submit">Add Ingredient</Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default AddIngredient;