import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import '../css.css';

import Header from '../../components/header';
import Meny from '../../components/meny';
import Footer from '../../components/footer';

import Kort from '../kort/kort';

import { Context } from '../Context/context';

const MainLogin = () => {
  const { personData, kortRedirect } = useContext(Context);
  if (kortRedirect[0].minasidor) {
    return <Redirect to="/minasidor" />;
  } else if (kortRedirect[0].ledigt) {
    return <Redirect to="/ledigt" />;
  }
  return (
    <>
      <Header />
      <Meny />
      <div className="marginTop mainImg"></div>
      <h2 className="mainNameTitle">Välkommen {personData.name}</h2>
      <div className="mainKort">
        <Kort
          name="ledigt"
          btnText={'Sök ledigt'}
          imgSrc={'img/ledig.jpg'}
          top={'-20px'}
        />
        <Kort
          name="minasidor"
          btnText={'Mina sidor'}
          imgSrc={'img/mina_kontrakt.jpg'}
          top={'-20px'}
        />
      </div>
      <Footer />
    </>
  );
};

export default MainLogin;
