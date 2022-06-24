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

  // STATE
  // tal vez quitamos la cantidad del objeto (VER)
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 3, isSelected: true },
    { itemName: 'item 3', quantity: 2, isSelected: false },
  ]);
  const [inputValue, setInputValue] = useState('');


  const handleAddItem = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue('');
  };



  return <div className="container">
    <Header />

    <main className="containerMain">
      <InputItem handleAddItem={handleAddItem} inputValue={inputValue} setInputValue={setInputValue} />
      <ListItem items={items} />
      <div className="containerMain__total">Total different items: {items.length}</div>
    </main>

    <Footer />
  </div>;
}

export default App;
