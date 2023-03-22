import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';

//function App() {
  // return (
  //   <div>
  //     Hello <b>react</b>
  //   </div>
  // );
  // return React.createElement("div",null,"Hello",React.createElement("b",null,"react"));
  function App(){
    return(
    <Fragment>{/*태그로(div, fragment )감싸야 실행됨*/}
      <h1>리액트 안녕</h1>
      <h2>잘 작동 하니?</h2>
    </Fragment>
    );
  }

export default App;
