import { useState ,useEffect, useRef} from "react"
import { useFetch } from "./hooks/useFetch";
import usePrev from "./hooks/usePrev";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
   
      const handler = setTimeout(() => {
          setDebouncedValue(value);
      }, delay);

      return () => {
          clearTimeout(handler);
      };
  }, [value, delay]);

  return debouncedValue;
};

function App() {
  const [inputVal,setInputVal] = useState("");
   const debouncedValue = useDebounce(inputVal,200);
   function change(e){
    setInputVal(e.target.value)
   }
   useEffect(()=>{
    console.log("expensive operation")
   },[debouncedValue])
  return( <>
     
     <input type="text" onChange={change}></input>
   </>)
}

export default App;




// usePrev

// const [state,setState] = useState(0);
// const prev = usePrev(state);
// return(
//   <>
//    <p>current Value{state}</p>
//    <button onClick={()=>{setState((curr)=> curr+1)}}>click</button>
//    <p>previous Value {prev}</p>
//   </>
// )



//use Fetch

// const [currentPost,setCurrentPost] = useState(1);
//    const {finalData,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost);


//      if(loading){
//       return( <div>
//         loading
//       </div>
//       )
//      }

//      return(
//       <div>
//         <button onClick={()=>setCurrentPost(1)}>1</button>
//         <button onClick={()=>setCurrentPost(2)}>2</button>
//         <button onClick={()=>setCurrentPost(3)}>3</button>

//         {JSON.stringify(finalData.title)}
//       </div>
//      )
