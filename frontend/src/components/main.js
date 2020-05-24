import React, { useContext } from 'react';

import MainNotLogin from './main/mainNotLogin';
import MainLogin from './main/mainLogin';

import { Context } from './Context/context';

const Main = () => {
  const { isLogin } = useContext(Context);

  return <>{isLogin ? <MainLogin /> : <MainNotLogin />}</>;
};

export default Main;
