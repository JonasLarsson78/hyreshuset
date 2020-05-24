import React, { useEffect, useContext, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Context } from '../Context/context';

import Header from '../header';
import Meny from '../meny';
import Footer from '../footer';

const Info = () => {
  const { ledigtData, isLogin, personData } = useContext(Context);
  const [data, setData] = useState({});
  const [txt, setTxt] = useState('');
  const { obj } = useParams();
  const objId = obj.substr(1);

  useEffect(() => {
    const infoData = ledigtData.find((x) => x.objId === objId);
    setData(infoData);
  }, [ledigtData, objId]);

  const intresse = () => {
    let txt;
    const r = window.confirm(
      `Vill ${personData.name} anmäla sitt intresse på ${data.adress} ?`,
    );
    if (r === true) {
      setTxt('Du har anmält dig. Tack för vissat intresse.');
    } else {
      setTxt('Du ville inte anmäla ditt intresse.');
    }
    console.log(txt);
  };

  if (!ledigtData.length) {
    return <Redirect to="/ledigt" />;
  }
  return (
    <>
      <Header />
      <Meny />
      <div className="marginTop">{'ObjID: ' + data.objId}</div>
      <div>{'Adress: ' + data.adress}</div>
      <div>{'Storlek: ' + data.storlek}</div>
      <div>{'Rum: ' + data.rum}</div>
      <div>{'Stad: ' + data.stad}</div>
      <div>{'Hyra: ' + data.hyra}</div>
      <div>{'Våning: ' + data.vaning}</div>
      <div>{'Inflyttning: ' + data.tillganglig}</div>
      <div>{'Beskrivning: ' + data.beskrivning}</div>
      <br />
      <br />
      <Link to="/ledigt">
        <button>Tillbaka</button>
      </Link>
      {isLogin ? <button onClick={intresse}>Anmäl intresse</button> : null}
      <br />
      <br />
      {txt}
      <Footer />
    </>
  );
};

export default Info;
