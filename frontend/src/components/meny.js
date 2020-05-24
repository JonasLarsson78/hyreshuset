import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from './Context/context';

const Meny = () => {
  const { kortRedirectTemp, setkortRedirect, personData, isLogin } = useContext(
    Context,
  );

  const activeClassName = (url) => {
    return `menyBtn ${
      window.location.pathname.substring(
        window.location.pathname.indexOf('0/') + 1,
      ) === url
        ? 'menyBtnActive'
        : null
    }`;
  };

  return (
    <div className="menyContainer">
      {isLogin ? (
        <div className="menyLoginUser">{`Inloggad som: ${personData.name}`}</div>
      ) : null}
      <Link
        onClick={() => setkortRedirect(kortRedirectTemp)}
        style={{ marginLeft: '20px' }}
        to="/"
        className={activeClassName('/')}
      >
        HEM
      </Link>
      <Link
        onClick={() => setkortRedirect(kortRedirectTemp)}
        to="/ledigt"
        className={activeClassName('/ledigt')}
      >
        LEDIGA LÄGENHETER
      </Link>
      <Link
        onClick={() => setkortRedirect(kortRedirectTemp)}
        to="/omoss"
        className={activeClassName('/omoss')}
      >
        OM OSS
      </Link>
      <Link
        style={{ marginRight: '20px' }}
        onClick={() => setkortRedirect(kortRedirectTemp)}
        to="/kontakt"
        className={activeClassName('/kontakt')}
      >
        KONTAKTA OSS
      </Link>
    </div>
  );
};

export default Meny;
