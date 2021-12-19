import React, { useState } from 'react';

const UserLogin = function ({ onSignUpPage }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  const submitHandler = () => {
    console.log('Logged On');
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">
            username:
            <input
              type="text"
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
              value={userInfo.username}
              required
              autoComplete="none"
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            password:
            <input
              type="password"
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              required
              autoComplete="none"
            />
          </label>
        </div>
        <input type="submit" value="Login" />
      </form>
      <div>
        <span>First time?</span>
        <button onClick={onSignUpPage} type="button">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
