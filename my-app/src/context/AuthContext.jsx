
import React, {createContext,useState,useContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isLoggedIn,setIsLoggedin] = useState(false);
    
   return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedin}}>
        {children}
    </AuthContext.Provider>
   );
}

export const useAuth = ()=>useContext(AuthContext);
