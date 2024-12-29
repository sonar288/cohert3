import React from 'react';

const App = () => {
   return (
    <div>
      <Card1/>
      <Card2/>
    </div>
   )
};

function Card1(){
  
  
  return(
    <div style={{background:"red", borderRadius:20,padding:20}}>
      Hi There
    </div>
  )
}
function Card2(){
  return(
    <div style={{background:"red", borderRadius:20,padding:20, margin:20}}>
      Hello
    </div>
  )
}

export default App;
