import React from 'react';

const Welcome = ({ userInfo }) => {
  const { username, wallet } = userInfo;
  return (
    <div>
      <div>Welcome {username}!</div>
      <div>Wallet: ${wallet}</div>
    </div>
  );
};

export default Welcome;
