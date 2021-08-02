import React, { useState } from "react";

const AuthContext = React.createContext<any>({
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider = (props: any) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = (value: boolean) => {
    setIsAuthenticated(value);
  }

  const logoutHandler = () => {
    setIsAuthenticated(false);
  }

  const contextValue = {
    setIsAuthenticated: setIsAuthenticated,
    isAuthenticated: isAuthenticated,
    login: loginHandler,
    logout: logoutHandler
  }

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;