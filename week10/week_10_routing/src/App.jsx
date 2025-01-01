import { BrowserRouter, Routes, Route,Link, Outlet } from "react-router-dom";
import "./App.css"
import { useRef, useState } from "react";
function App() {
  const [currentCount,setCurrentCount] = useState(0);
  let timer= useRef();
  function startClock(){
     let value = setInterval(function(){
      setCurrentCount(count=>count+1);     
    },1000)
       timer.current = value;
  }
  function StopClock(){
    console.log(timer)
    clearInterval(timer.current);
  }
  return (
    <div>
          {currentCount}
          <br/>
          <button onClick={startClock}>Start</button>
          <button onClick={StopClock}>Stop</button>
    </div>
  )
}


export default App
