import React, { useState } from "react";
import AuthContext from "./AuthContext";
import Login from "./Login";

const AuthContextProvider = () => {
  const [isAuth, toggleAuth] = useState(false);

  return (
    <div>
      <AuthContext.Provider value={{ isAuth, toggleAuth }}>
        <Login />
      </AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
