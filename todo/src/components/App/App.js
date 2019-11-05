import React from 'react';
import ItemList from '../ItemList/ItemList.js';
import Footer from '../Footer/Footer';
const todoItem = "Create new app!";


const App = () => (<div>
  <h1>Hello! It's todo-list.</h1>
  <ItemList todoItem={ todoItem }/>
  <Footer todoListAll={3}/>
</div>);


export default App;