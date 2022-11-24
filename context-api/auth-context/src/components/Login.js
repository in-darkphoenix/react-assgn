import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import "./Login.css";

function Login() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const [token, setToken] = useState({});

  const foo = async (event) => {
    event.preventDefault();

    if (isAuth) {
      toggleAuth(false);
    } else {
      const email = document.getElementById("email").value;
      const password = document.getElementById("pass").value;
      document.querySelector(".login-form").reset();

      // const email = "eve.holt@reqres.in";
      // const password = "cityslicka";

      const user = {
        email: email,
        password: password,
      };

      try {
        const res = await fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const data = await res.json();
        console.log(data);
        setToken(data);
        toggleAuth(true);
      } catch (err) {
        setToken({});
        console.log(err);
      }
    }
  };

  return (
    <div>
      <div className="nav">
        <a href="/">
          <button onClick={foo}>{isAuth ? "Logout" : "Login"}</button>
        </a>
      </div>

      <div>
        <form className="login-form">
          <input id="email" type="email" placeholder="Enter Email" />
          <input id="pass" type="password" placeholder="Enter password" />
        </form>

        <div className="token">
          <h2 id="status" style={{ color: "green" }}>
            {token.token ? "login successfull" : ""}
          </h2>
          {token.token ? (
            <p id="token-info">{token.token}</p>
          ) : (
            <h2 id="error" style={{ color: "red" }}>
              {token.error}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
