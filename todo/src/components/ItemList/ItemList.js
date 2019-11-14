import React from 'react';
import Item from '../Item/Item.js';

const ItemList = ({ todoItem }) => (
    <ul>
        {todoItem.map(item => (<li key={item.value}>{item.value}</li>))}
    </ul>
);

export default ItemList;
