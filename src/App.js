import logo from './logo.svg';
import './App.css';
import React from 'react';

//function App() {
  // return (
  //   <div>
  //     Hello <b>react</b>
  //   </div>
  // );
  // return React.createElement("div",null,"Hello",React.createElement("b",null,"react"));
  function App(){
    return(
    <div>{/*div로 감싸야 실행됨*/}
      <h1>리액트 안녕</h1>
      <h2>잘 작동 하니?</h2>
    </div>
    );
  }

export default App;
