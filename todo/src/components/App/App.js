import React from 'react';
import ItemList from '../ItemList/ItemList.js';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import './App.css';

const todoItem = [
  {value: 'Сходить на рынок'},
  {value: 'Купить котиков, которые стреляют лазером из глаз'},
  {value: 'Захватить мир'}
];

const App = () => (<div className = 'wrap'>
  <h1>Важные дела:</h1>
  <InputItem />
  <ItemList todoItem={ todoItem }/>
  <Footer todoListAll={3}/>
</div>);


export default App;