import React, { useContext, useEffect, useState } from 'react';
import { init, authWithPassword } from '../firebaseUtils';

import './minasidor.css';

import { getUserData } from '../firebaseFunction/function';

import { Context } from '../Context/context';

const Login = () => {
  const {
    setIsLogin,
    setShowLogin,
    setPersonData,
    setT,
    temaColor,
  } = useContext(Context);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState('none');

  useEffect(() => {
    init();
  });
  const onChange = (e) => {
    const target = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: target });
  };

  const login = () => {
    setLoading('block');
    authWithPassword(formData)
      .then((res) => {
        let epost = res.user.email;

        getUserData({ epost })
          .then((res) => {
            setLoading('none');
            let userData = res.data.data[0];
            temaColor(userData.tema);
            setT(userData.tema);
            setPersonData(userData);
            setShowLogin(false);
            setIsLogin(true);
          })
          .catch((err) => console.error(err.message));
      })
      .catch((err) => {
        console.error(err.message);
        setLoading('none');
      });
  };

  return (
    <>
      <div className="loginContainer">
        <h3 className="loginH3">Logga in på mina sidor</h3>
        <input
          name="email"
          className="loginInput"
          type="email"
          placeholder="E-post..."
          onChange={onChange}
        />
        <br />
        <br />
        <input
          name="password"
          className="loginInput"
          type="password"
          onChange={onChange}
          placeholder="Lösenord..."
        />
        <br />
        <br />
        <button onClick={() => setShowLogin(false)} className="backBtn">
          Tillbaka
        </button>
        <button onClick={login} className="loginBtn">
          Login
        </button>
        <div style={{ display: loading }} className="loaderText">
          Laddar...
        </div>
        <div style={{ display: loading }} className="loader" />
      </div>
      <div onClick={() => setShowLogin(false)} className="loginBack" />
    </>
  );
};

export default Login;
