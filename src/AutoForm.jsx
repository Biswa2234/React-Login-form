// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function AutoForm() {
  const [isLogin, setLogin] = useState(true);
  return (
    <div className="container">
      <div className=" form-container">
        <div className="form-toogle">
          <button
            className={isLogin ? "active ": ""}
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login form</h2>
              <input type="email" placeholder="Enter your email"></input>
              <input type="password" placeholder="Enter your password"></input>
              <a href="#">forget password ?</a>
              <button>login</button>
              <p>
                not a member{" "}
                <a href="#" onClick={() => setLogin(false)}>
                  Signup now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup form</h2>
              <input type="email" placeholder="Enter your email"></input>
              <input type="password" placeholder="Enter your password"></input>
              <input
                type="password"
                placeholder="Enter your Confirm password"
              ></input>
              <button>SignUp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AutoForm;
