import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  // return (
  //   <div>
  //     Hello <b>react</b>
  //   </div>
  // );
  return React.createElement("div",null,"Hello",React.createElement("b",null,"react"));
}

export default App;
