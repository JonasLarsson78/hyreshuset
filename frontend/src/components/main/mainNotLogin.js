import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import '../css.css';

import Header from '../../components/header';
import Meny from '../../components/meny';
import Footer from '../../components/footer';

import { Context } from '../Context/context';

import Kort from '../kort/kort';

const MainNotLogin = () => {
  const { kortRedirect } = useContext(Context);

  if (kortRedirect[0].om) {
    return <Redirect to="/omoss" />;
  } else if (kortRedirect[0].kontakt) {
    return <Redirect to="/kontakt" />;
  } else if (kortRedirect[0].ledigt) {
    return <Redirect to="/ledigt" />;
  }
  return (
    <>
      <Header />
      <Meny />
      <div className="marginTop mainImg"></div>
      <div className="mainKort">
        <Kort name="ledigt" btnText={'Sök ledigt'} imgSrc={'img/ledig.jpg'} />
        <Kort name="om" btnText={'Om oss'} imgSrc={'img/omoss.jpg'} />
        <Kort
          name="kontakt"
          btnText={'Kontakta oss'}
          imgSrc={'img/kontakt3.jpg'}
        />
      </div>
      <Footer />
    </>
  );
};

export default MainNotLogin;
