import React, { useState } from 'react';

const UserLogin = function ({
  onSignUpPage,
  userInfo,
  setUserInfo,
  setIsLoggedOn,
}) {
  const { username, password, wallet, admin } = userInfo;

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/userLogin', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.errorMessage)
          document.querySelector('#errorDiv').innerHTML = result.errorMessage;
        else {
          setUserInfo({
            ...userInfo,
            username: result.username,
            wallet: result.wallet,
            admin: result.admin,
          });
          setIsLoggedOn(true);
        }
      })
      .catch((error) => {
        document.querySelector('#errorDiv').innerHTML = error;
      });
  };
  return (
    <div>
      <h1>Login</h1>
      <div id="errorDiv" name="Log-in Errors"></div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">
            Username:
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
            Password:
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
