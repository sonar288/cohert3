
import { useState ,useContext} from "react";
import "./login.css";
import { AuthContext } from "./AuthSystem";

function Login({onLogin: propOnLogin}){
  const [userName, setUserName] = useState('');
  const contextValue = useContext(AuthContext);

  const handleLogin = () => {
    if (contextValue?.login) {
      contextValue.login(userName);
    } else if (propOnLogin) {
      propOnLogin(userName);
    }
    setUserName('');
  };

  return(
    <div className="form">
         <div>
            <label>Name</label><br/>
            <input type="text" id="username" name="username" placeholder="Enter your Name" onChange={(e)=>setUserName(e.target.value)}value={userName}/>
         </div>
         <div>
            <button
            onClick={handleLogin}
            >
              Submit</button>
         </div>
    </div>
  )
}

export default Login;


