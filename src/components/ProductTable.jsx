import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ProductTableRow from "./ProductTableRow";
import products from "../products.json";
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const ProductTable = () => {
    return(
        <>
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr>
                        <td>Name:</td>
                        <td>Description:</td>
                        <td>Count:</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(({title, desc, count, id}) => 
                                <ProductTableRow key={id} name={title} desc={desc} count={count} />) 
                    }  
                </tbody>
            </Table>
        </>
    );
};

export default ProductTable;