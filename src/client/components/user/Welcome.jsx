import React from 'react';

const Welcome = ({ userInfo }) => {
  const { username, wallet } = userInfo;
  return (
    <div>
      <h1>Welcome {username}!</h1>
      <h1>Wallet: ${wallet}</h1>
    </div>
  );
};

export default Welcome;
