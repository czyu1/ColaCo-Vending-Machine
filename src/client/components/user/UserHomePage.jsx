import React, { useState } from 'react';
import SignUp from './SignUp.jsx';
import UserLogin from './UserLogin.jsx';
import VendingMachine from '../machine/VendingMachine.jsx';
import Welcome from './Welcome.jsx';

const HomePage = function () {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    wallet: 0,
    admin: false,
  });

  const [currentPage, setCurrentPage] = useState('userLogin');
  const [isLoggedOn, setIsLoggedOn] = useState(false);

  const previousPage = () => {
    setCurrentPage('userLogin');
  };

  const onSignUpPage = () => {
    setCurrentPage('signUp');
  };

  const renderPage = (page) => {
    switch (page) {
      case 'signUp':
        return (
          <SignUp
            previousPage={previousPage}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setIsLoggedOn={setIsLoggedOn}
          />
        );
      default:
        return (
          <UserLogin
            onSignUpPage={onSignUpPage}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setIsLoggedOn={setIsLoggedOn}
          />
        );
    }
  };

  return (
    <div>
      {!isLoggedOn && renderPage(currentPage)}
      {isLoggedOn && <Welcome userInfo={userInfo} setUserInfo={setUserInfo} />}
      <VendingMachine userInfo={userInfo} setUserInfo={setUserInfo} />
    </div>
  );
};

export default HomePage;
