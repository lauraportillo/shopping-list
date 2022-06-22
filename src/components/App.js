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

  // state
  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, isSelected: false },
    { itemName: 'item 2', quantity: 3, isSelected: true },
    { itemName: 'item 3', quantity: 2, isSelected: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  // const [totalItemCount, setTotalItemCount] = useState(6);

  const handleAddItem = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
    setInputValue('');
    // calculateTotal();
  };

  return <div className="container">
    <Header />

    <main className="containerMain">
      <InputItem handleAddItem={handleAddItem} inputValue={inputValue} setInputValue={setInputValue} />
      <ListItem items={items} />
      <div className="containerMain__total" >Total: 00</div>
      {/* <div className='total'>Total: {totalItemCount}</div> */}
    </main>

    <Footer />
  </div>;
}

export default App;
