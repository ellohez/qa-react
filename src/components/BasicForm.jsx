import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

function BasicForm() {

  const[username, setUsername] = useState('');
  const[pwd, setPwd] = useState('');

  const printValues = (e) => {
    e.preventDefault();
    console.log(`Username: ${username} - Password: ${pwd}`);
  }

  return (
    <Form onSubmit={printValues}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name:" 
                    value={username} onChange={e => setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPwd">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password:" 
                    value={pwd} onChange={e => setPwd(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default BasicForm;