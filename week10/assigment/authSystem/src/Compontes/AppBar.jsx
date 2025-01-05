
import{AuthContext} from "./AuthSystem";
import { useContext } from "react";

function AppBar({userName:propsUserName,  loggedIn: propLoggedIn, logout: propLogout}){
    const contextValue = useContext(AuthContext);
    
    const displayUserName = contextValue?.userName ??propsUserName;
    const displayLoggedIn = contextValue?.loggedIn ??propLoggedIn;
    const handleLogout = contextValue?.logout ?? propLogout;

    return(
        <div style={{ backgroundColor: "#d1cdcc", height: "10vh", display: "flex", alignItems: "center", padding: "0 20px",justifyContent: "space-between" }}>
          <h1>Auth System Demo</h1>
          {displayLoggedIn ? (
            <div style={{display:"flex", alignItems:"center"}}>
            <span>Wellcome,{displayUserName}!</span>
            <button onClick={handleLogout}>
                 Logout
            </button>
            </div>
            ):(
                <span>Not Loged in</span>
            )}
          
       </div>
    )
}

export default AppBar;