// React
import React, { useState } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import '../stylesheets/App.scss';
import '../stylesheets/Reset.scss';


function App() {
  return <div className="container">
    <Header />
    <List />
    <Footer />
  </div>;
}

export default App;
