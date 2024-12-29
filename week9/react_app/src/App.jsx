import { useEffect, useState } from "react";

function App() {
 const [count,setCount] = useState(0);
 const [count2,setCount2] = useState(0);
 function increase(){
  setCount(count+1);
 }
 function decrease(){
  setCount2(count2-1);
 }
  return (
     <div>
      <Counter count={count} count2={count2}></Counter>
      <button onClick= {increase}>increase</button>
      <button onClick= {decrease}>decrease</button>

     </div>
  )
}
function Counter(props){
  useEffect(function(){

  
  console.log("mount")
   return function(){
    console.log("unmount");
   }
},[]);

useEffect(function(){
  console.log("count change")
  return function(){
    console.log("cleanup the button")
  }
},[props.count])

return (
  <div>
    Counter1 {props.count}
    Counter2 {props.count2}
  </div>
)
}
export default App
