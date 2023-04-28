import { useState } from "react";
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const ProductTableRow = ({name, desc, count}) => {(
    <div className="row">
        <tr>
            <td>Name: {name}</td>
            <td>Description: {desc}</td>
            <td>Count: {count}</td>
        </tr>
    </div>
)};

export default ProductTableRow;
