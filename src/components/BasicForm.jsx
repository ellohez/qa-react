import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

function BasicForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Cat name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name:" />
        <Form.Text className="text-muted">
          Tell us about your cats!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicColour">
        <Form.Label>Colour:</Form.Label>
        <Form.Control type="text" placeholder="Colour:" />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicForm;