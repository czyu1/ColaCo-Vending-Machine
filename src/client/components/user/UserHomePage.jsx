import React, { useState } from 'react';
import SignUp from './SignUp.jsx';
import UserLogin from './UserLogin.jsx';

const HomePage = function () {
  const [currentPage, setCurrentPage] = useState('userLogin');

  const previousPage = () => {
    setCurrentPage('userLogin');
  };
  const onSignUpPage = () => {
    setCurrentPage('signUp');
  };

  const renderPage = (currentPage) => {
    switch (currentPage) {
      case 'signUp':
        return <SignUp previousPage={previousPage} />;
      default:
        return <UserLogin onSignUpPage={onSignUpPage} />;
    }
  };

  return <div>{renderPage}</div>;
};

export default HomePage;
