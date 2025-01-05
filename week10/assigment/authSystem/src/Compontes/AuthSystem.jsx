
import { createContext, useState } from "react";
import AppBar from "./AppBar";
import Home from "./home";
import Login from "./Login";
  
  
export const AuthContext =createContext(undefined);
function AuthSystem(){
    
  
  const[useContextApi,setUseContextApi] = useState(false);
  const[userName,setUserName] = useState("");
  const[loggedIn,setLoggedIn] = useState(false);

  function login(newUserName){
    setUserName(newUserName);
    setLoggedIn(true)
  }

  function logout(){
    setUserName(" ");
    setLoggedIn(false);
  }
   const contextValue = useContextApi ? {userName, loggedIn,login, logout} :undefined;
    return(
        <AuthContext.Provider value={contextValue}>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <AppBar
             userName={userName}
             loggedIn={loggedIn}
             logout={logout}
            />
            <div style={{ display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '1rem',
          backgroundColor: '#f0f0f0'}}>
               <input id="use-context-api"type="checkbox" checked={useContextApi} 
               onChange={(e)=>setUseContextApi(e.target.checked)} />
               <label htmlFor="use-context-api">useContextApi:{useContextApi?"On":"Off"}</label>
            </div>
            <main>
                {loggedIn?(
                    <Home/>
                ):(
                   <Login
                   onLogin={login}/>
                )}
            </main>
            </div>
        </AuthContext.Provider>
    )
}


export default AuthSystem;