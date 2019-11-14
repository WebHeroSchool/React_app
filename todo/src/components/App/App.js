import React from 'react';
import ItemList from '../ItemList/ItemList.js';
import Footer from '../Footer/Footer';
import InputItem from '../InputItem/InputItem';
import styles from './App.module.css';

const todoItem = [
  {value: 'Сходить на рынок'},
  {value: 'Купить котиков, которые стреляют лазером из глаз'},
  {value: 'Захватить мир'}
];

const App = () => (<div className = {styles.wrap}>
  <h1 className = {styles.title}>Важные дела:</h1>
  <InputItem />
  <ItemList todoItem={ todoItem }/>
  <Footer todoListAll={3}/>
</div>);


export default App;