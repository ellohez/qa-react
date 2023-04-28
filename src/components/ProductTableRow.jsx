import products from "../products.json";
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const ProductTableRow = ({name, desc, count}) => (
    <tr>
        <td>{name}</td>
        <td>{desc}</td>
        <td>{count}</td>    
    </tr>
);

export default ProductTableRow;
