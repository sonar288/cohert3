import { useEffect, useRef } from "react";

function usePrev(value){
   const ref = useRef();
   console.log("re-render happended with new value "+value);

   useEffect(()=> {
    console.log("updated the ref to be "+value);
    ref.current = value;
   },[value]);
   
   console.log("returend "+ref.current);
   return ref.current;
   
}

export default usePrev;