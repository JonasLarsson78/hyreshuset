import React, { useState, createContext } from 'react';

/* ------------------ MockData ------------------ */
//import { mockData } from './mockdata';
/* ---------------------- MockData End ------------------------- */

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const kortRedirectTemp = [
    {
      om: false,
      kontakt: false,
      ledigt: false,
      minasidor: false,
    },
  ];
  // Color themes
  const temaColor = (value) => {
    let root = document.documentElement;

    if (value === 'g') {
      root.style.setProperty('--defaultColor', '#008000');
      root.style.setProperty('--defaultColorActive', '#52b152');
    } else if (value === 'b') {
      root.style.setProperty('--defaultColor', '#0303e0');
      root.style.setProperty('--defaultColorActive', '#7373ff');
    } else if (value === 'r') {
      root.style.setProperty('--defaultColor', '#ff1a1a');
      root.style.setProperty('--defaultColorActive', '#ff8282');
    } else {
      root.style.setProperty('--defaultColor', '#ff6347');
      root.style.setProperty('--defaultColorActive', '#fa765f');
    }
  };

  const [isLogin, setIsLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [personData, setPersonData] = useState(null); // Live set to null - test/dev set to mockData.
  const [ledigtData, setLedigtData] = useState([]);
  const [kortRedirect, setkortRedirect] = useState(kortRedirectTemp);
  const [t, setT] = useState('o');

  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        showLogin,
        setShowLogin,
        personData,
        setPersonData,
        kortRedirectTemp,
        kortRedirect,
        setkortRedirect,
        ledigtData,
        setLedigtData,
        t,
        setT,
        temaColor,
      }}
    >
      {children}
    </Context.Provider>
  );
};
