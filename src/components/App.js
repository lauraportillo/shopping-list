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
  const [items, setItems] = useState([]);
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


  const handleDeleteItem = (index) => {
    const deleteItem = [...items];
    deleteItem.splice(index, 1);
    setItems(deleteItem);
  };


  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const handleReset = () => {
    setItems([]);
  };
  return <div className="container">
    <Header />

    <main className="containerMain">
      <InputItem handleAddItem={handleAddItem} inputValue={inputValue} setInputValue={setInputValue} />
      <ListItem items={items} toggleComplete={toggleComplete} handleDeleteItem={handleDeleteItem} />
      <ResetButton handleReset={handleReset} />
    </main>

    <Footer />
  </div>;
}

export default App;
