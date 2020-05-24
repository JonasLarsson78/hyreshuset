import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './css.css';

import { logOut } from './firebaseUtils';
import { Context } from './Context/context';

import Login from './minaSidor/login';

const Header = () => {
  const [hem, setHem] = useState(false);
  const [minaSidor, setMinaSidor] = useState(false);

  const {
    isLogin,
    setIsLogin,
    showLogin,
    setShowLogin,
    setT,
    temaColor,
  } = useContext(Context);

  const logout = () => {
    setShowLogin(false);
    setIsLogin(false);
    setMinaSidor(false);
    setHem(true);
    temaColor('o');
    setT('o');
    logOut();
  };

  if (minaSidor) {
    return <Redirect to="/minasidor" />;
  }
  if (hem) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {showLogin ? <Login /> : null}
      <div className="headerContainer">
        <div className="headerLogo"></div>
        {isLogin ? (
          <>
            <button
              onClick={() => {
                if (
                  window.location.pathname.substring(
                    window.location.pathname.indexOf('0/') + 1,
                  ) !== '/minasidor'
                ) {
                  setMinaSidor(true);
                }
              }}
              className="headerUserSettings"
            >
              Mina sidor
            </button>
            <button
              onClick={logout}
              className="headerUserSettings headerLogout"
            >
              Logga ut
            </button>
          </>
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="headerUserSettings headerLogout"
          >
            Logga in
          </button>
        )}
      </div>
    </>
  );
};

export default Header;
