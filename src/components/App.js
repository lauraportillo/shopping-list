// React
import React, { useState } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';


function App() {
  return <>
    <Header />
    <List />
    <Footer />
  </>;
}

export default App;
