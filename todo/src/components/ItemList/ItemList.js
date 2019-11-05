import React from 'react';
import Item from '../Item/Item.js';

const ItemList = ({ todoItem }) => (
    <ul>
        <li><Item todoItem={ todoItem }/></li>
        <li><Item todoItem={ todoItem }/></li>
        <li><Item todoItem={ todoItem }/></li>
    </ul>
);

export default ItemList;
