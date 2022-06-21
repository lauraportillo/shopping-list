// React
import React, { useState } from 'react';
// Components
import Header from './Header';
import InputItem from './InputItem';
import ListItem from './ListItem';
import Footer from './Footer';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';




function App() {

  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 3, isSelected: true },
    { itemName: 'item 3', quantity: 2, isSelected: false },
  ]);

  return <div className="container">
    <Header />

    <main className="containerMain">
      <InputItem />
      <ListItem />
    </main>

    <Footer />
  </div>;
}

export default App;
