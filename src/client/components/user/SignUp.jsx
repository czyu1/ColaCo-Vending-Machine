import React, { useState } from 'react';

const SignUp = function ({
  previousPage,
  userInfo,
  setUserInfo,
  setIsLoggedOn,
}) {
  const { username, password } = userInfo;

  const submitHandler = (e) => {
    e.preventDefault();
    fetch('/api/signUp', {
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
      <h1>Sign Up</h1>
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
        <input type="submit" value="SignUp" />
      </form>
      <div>
        <button onClick={previousPage} type="button">
          Back
        </button>
      </div>
    </div>
  );
};

export default SignUp;
