import React, { useState } from 'react';

const SignUp = function ({ previousPage }) {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const { username, email } = userInfo;

  const submitHandler = () => {
    console.log('Signed up');
  };
  return (
    <div>
      <h1>Sign Up</h1>
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
        <input type="submit" value="SignUp" />
      </form>
      <div>
        <span>Back</span>
        <button onClick={previousPage} type="button"></button>
      </div>
    </div>
  );
};

export default SignUp;
