import './App.css';
import React, { useState,useEffect } from 'react';

function App() {
  useEffect(()=>{
    console.log('1')
    const xhr =new XMLHttpRequest();
    xhr.open("get", "https://www.baidu.com", true);
    xhr.send();
  });


  let [count,setCount]=useState(0);
  console.log('2')
  console.log('3')
  console.log('4')

  
  return (
    <div>
      <div className="box">{count}</div>
      <div className="click">
        <button onClick={()=>setCount(count+1)}>Click me plus 1!</button>
        <button onClick={()=>setCount(count-1)}>Click me reduce 1!</button>
        <button onClick={()=>setCount(count=0)}>Click me reset!</button>
      </div>
    </div>
  );
}

export default App;
