// React
import React, { useState } from 'react';
// Components
import Header from './Header';
import InputItem from './InputItem';
import ListItem from './ListItem';
import Footer from './Footer';
import ResetButton from './ResetButton';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';


function App() {

  // STATE
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 3, isSelected: true },
    { itemName: 'item 3', quantity: 2, isSelected: false },
  ]);
  // const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState('');

  console.log(items);

// ESTUDIAR CÓMO HACER QUE EN QUANTITY SE REFLEJE EL VALOR DEL COUNTER
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

  // aqui hacer un handle DELETE ITEM

  const toggleComplete = (index) => {
    const newItems = [...items];

    newItems[index].isSelected = !newItems[index].isSelected;

    setItems(newItems);
  };

  const handleReset = () => {
    setItems([
      { itemName: 'item 1', quantity: 1, isSelected: false },
      { itemName: 'item 2', quantity: 3, isSelected: true },
      { itemName: 'item 3', quantity: 2, isSelected: false },
    ]);
  };
  return <div className="container">
    <Header />

    <main className="containerMain">
      <InputItem handleAddItem={handleAddItem} inputValue={inputValue} setInputValue={setInputValue} />
      <ListItem items={items} toggleComplete={toggleComplete} />
      <ResetButton handleReset={handleReset} />
    </main>

    <Footer />
  </div>;
}

export default App;
