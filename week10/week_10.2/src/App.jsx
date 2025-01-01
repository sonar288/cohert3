import React, { createContext, useContext, useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';
// usind recoil state management toll
const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;

// the code with rolling up and prop drilling
// function App() {
//   const [bulbOn, setBulbOn] = useState(true);

//   return (
//     <div>
//       <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn} />
//     </div>
//   )
// }

// function LightBulb({bulbOn,setBulbOn}){
  
//   return(
//     <div>
//       <BulbState bulbOn={bulbOn}/>
//       <ToggleBulb setBulbOn={setBulbOn} />
//     </div>
//   )
// }

// function BulbState({bulbOn}){
  
//   return(
//     <div>
//         {bulbOn ? "Bulb On": "Bulb off"}
//     </div>
//   )
// }


// function ToggleBulb({setBulbOn}){
//   function handleChange(){

//     setBulbOn(currentState => !currentState)
//   }
//   return(
//     <div>
//       <button onClick={handleChange}>Toggle the bulb</button>
//     </div>
//   )
// }

// with the context API which removes problem of prop drilling
// const BulbContext = createContext();

// function BulbProvider({children}){
//   const [bulbOn, setBulbOn] = useState(true);
//   return(
//     <BulbContext.Provider value={{
//       bulbOn:bulbOn,
//       setBulbOn:setBulbOn
//     }}>
//      {children}

//     </BulbContext.Provider>
//   )
// }
// function App() {
    
  
//     return (
//       <div>
//         <BulbProvider>
//           <LightBulb/>
//         </BulbProvider>
        
//       </div>
//     )
//   }
  
//   function LightBulb(){
    
//     return(
//       <div>
//         <BulbState />
//         <ToggleBulb  />
//       </div>
//     )
//   }
  
//   function BulbState(){
//     const{bulbOn} = useContext(BulbContext);
//     return(
//       <div>
//           {bulbOn ? "Bulb On": "Bulb off"}
//       </div>
//     )
//   }
  
  
//   function ToggleBulb(){
//     const {setBulbOn} = useContext(BulbContext);
//     function handleChange(){
  
//       setBulbOn(currentState => !currentState)
//     }
//     return(
//       <div>
//         <button onClick={handleChange}>Toggle the bulb</button>
//       </div>
//     )
//   }