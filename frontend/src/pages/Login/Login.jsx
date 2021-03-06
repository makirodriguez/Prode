import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SignupButton } from "./SignUp";
import LoginIcon from '@mui/icons-material/Login';


 const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();
 
return(
  
  <div>
  <button className="btn btn-primary" onClick={() => loginWithRedirect()}> <LoginIcon/> Log In</button>
                    
                        <SignupButton />
                  
      
  
  </div> 
);
}
  
export default LoginButton;
  

