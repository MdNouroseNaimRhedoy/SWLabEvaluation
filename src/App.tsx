import React from 'react';
import logo from './logo.svg';
import './App.css';

import AuthComponent from './components/auth-component/auth-component';
import TestComponent from './components/test-component/test-component';
import ProductList from './components/product-component/product-component'

function App() {
  return (
    <div className="App">
      <ProductList/>
    </div>
  );
}

export default App;