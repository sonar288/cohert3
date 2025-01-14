
import { useEffect, useState, memo } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import{counterAtom,evenSelector} from "./store/atoms/counter.js"

function App(){


  return(
    <div>
          <RecoilRoot>
          <Button/>
          <Counter/>
          <IsEven/>
          </RecoilRoot>
    </div>
  )
}
function Counter(){
  const count = useRecoilValue(counterAtom);
  return (
    <div>
       {count}
    </div>
  )
  
}
function Button(){
  const setCount = useSetRecoilState(counterAtom);
function increase(){
  setCount(c => c+2 )
}
function decrease(){
  setCount(c => c-1 )
}

return (
   <div>
    <button onClick={increase}> increase </button>
    <button onClick={decrease}> decrease </button>
  </div>
  )
}
function IsEven(){
  const even = useRecoilValue(evenSelector)
  return( 
  <div>
   {even ? "Even":"Odd"}
  </div> 
  ) 
}
export default App;



//using memo
// function App() {
//   return (
//   <>
   
//    <Counter/>
  
//   </>
//  )
   
//  }
//  function Counter(){
//   const [count,setCount] = useState(0);

//    useEffect(()=>{
//     setInterval(()=>{
//       setCount(c => c + 1)
//     },3000)
//    },[])
   
//    return(
//      <div>
//        <CurrentCount count={count}/>
//        <Increase />
//        <Decrease />
//      </div> 
//    )
//  }
//  const CurrentCount = memo(function ({count}){
//   return(
//     <div>
//      {count}
//     </div>
//   )
// })
//  const Increase= memo(function (){ function increase(){
     
//    }
//    return (
//      <div>
//        <button onClick={increase}>Increase</button>
//      </div>
//    )
//  }
// )
//  const Decrease = memo(function (){
 
//    function decrease(){
//    }
//    return(
//      <div>
//        <button onClick={decrease}>Decrease</button>
//      </div>
//    )
//  })

//counter using recoil atom
// function App() {
//   return (
//   <>
//    <RecoilRoot>
//    <Counter/>
//    </RecoilRoot>
//   </>
//  )
   
//  }
//  function Counter(){
  
//    return(
//      <div>
     
//        <CurrentCount />
//        <Increase />
//        <Decrease />
//      </div> 
//    )
//  }
//  function CurrentCount(){
//   const count = useRecoilValue(counterAtom)
//   return(
//     <div>
//       {count}
//     </div>
//   )
// }
//  function Increase(){
//   const setCount = useSetRecoilState(counterAtom);
//    function increase(){
//      setCount(c => c+1);
//    }
//    return (
//      <div>
//        <button onClick={increase}>Increase</button>
//      </div>
//    )
//  }
 
//  function Decrease(){
//   const setCount = useSetRecoilState(counterAtom);
//    function decrease(){
//      setCount(c => c-1);
//    }
//    return(
//      <div>
//        <button onClick={decrease}>Decrease</button>
//      </div>
//    )
//  }


//Counter using state mangement

// function App() {
//   return (
//   <>
//        <Counter/>
//      </>
//  )
   
//  }
//  function Counter(){
//    const [count,setCount]= useState(0);
//    return(
//      <div>
//        <CurrentCount count={count}/>
//        <Increase setCount={setCount}/>
//        <Decrease setCount={setCount} />
//      </div> 
//    )
//  }
 
//  function Increase({setCount}){
//    function increase(){
//      setCount(c => c+1);
//    }
//    return (
//      <div>
//        <button onClick={increase}>Increase</button>
//      </div>
//    )
//  }
//  function CurrentCount({count}){
//    return(
//      <div>
//        {count}
//      </div>
//    )
//  }
//  function Decrease({setCount}){
//    function decrease(){
//      setCount(c => c-1);
//    }
//    return(
//      <div>
//        <button onClick={decrease}>Decrease</button>
//      </div>
//    )
//  }