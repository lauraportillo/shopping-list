// React
import React, { useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
// Components
import Header from './Header';
import Message from './Message';
import InputItem from './InputItem';
import ListItem from './ListItem';
import Footer from './Footer';
import ResetButton from './ResetButton';
import PrintButton from './PrintButton';
import SortButtonUp from './SortButtonUp';
import SortButtonDown from './SortButtonDown';
// Styles
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';


const App = () => {
  // State
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  useEffect(() => {
    const data = localStorage.getItem('my-shopping-list');
    if (data) {
      setItems(JSON.parse(data));
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('my-shopping-list', JSON.stringify(items));
  });


  const handleAddItem = () => {
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false,
    };

    if (newItem.itemName === '') {

    } else {
      const newItems = [...items, newItem];
      setItems(newItems);
      setInputValue('');

    }
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

  const handleSortUp = () => {
    const sortedItems = [...items]
      .sort((a, b) => a.itemName.localeCompare(b.itemName));
    setItems(sortedItems);
  }

  const handleSortDown = () => {
    const sortedItems = [...items]
      .sort((a, b) => b.itemName.localeCompare(a.itemName));
    setItems(sortedItems);
  }

  const handleReset = () => {
    setItems([]);
  };

  const renderMain = () => {
    if (items.length === 0) {
      return <Message />
    } else {
      return (
        <>
          <ListItem items={items} toggleComplete={toggleComplete} handleDeleteItem={handleDeleteItem} />
          <section className="containerMain__btns">
            <ResetButton handleReset={handleReset} />
            <PrintButton />
            <SortButtonUp handleSortUp={handleSortUp} />
            <SortButtonDown handleSortDown={handleSortDown} />
          </section>
        </>
      );
    }
  }

  return <div className="container">
    <Header />

    <main className="containerMain">
      <InputItem handleAddItem={handleAddItem} inputValue={inputValue} setInputValue={setInputValue} />
      {renderMain()}
    </main>

    <Footer />
  </div>;
}

export default App;
