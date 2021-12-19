import React, { useState } from 'react';

function UserLogin() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  return (
    <div>
      <h1>Login</h1>
      <form>
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
            ></input>
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
            ></input>
          </label>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
