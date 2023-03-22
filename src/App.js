import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';

function App(){
  const name = '리액트';
  return(
  <div
    style={{
      //background-color 는 backgroundColor와 값이 -가 사라지고 카멜 표기법으로 작성
      backgroundColor : 'black',
      color : 'aqua',
      fontSize : '48px', //font-size --> fontSize
      fontWeight : 'bold',
      padding : 16 //단위를 생략하면 px로 지정된다.
    }}
    >
      {name}
    </div>
  )
}

export default App;
