import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';

function App(){
  const name = undefined;
  //return name ; //안나옴
  // return name || '값이 undefined입니다요' //후자 값 나옴
  // return <div>{name}</div>; //안나옴
  return <div>{name || '리액트'}</div>; //후자 값 나옴
}

export default App;
