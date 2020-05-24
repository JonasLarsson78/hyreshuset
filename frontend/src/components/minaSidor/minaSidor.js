import React, { useContext, useEffect, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { updateUserTheme } from '../firebaseFunction/function';

import Header from '../../components/header';
import Meny from '../../components/meny';
import Footer from '../../components/footer';

import { Context } from '../Context/context';

const MinaSidor = () => {
  const { personData, t, setT, temaColor } = useContext(Context);
  const [bostad, setBostad] = useState([]);
  const [pakering, setPakering] = useState([]);
  const [forad, setForad] = useState([]);
  const [ovrigt, setOvrigt] = useState([]);

  useEffect(() => {
    if (personData) {
      const b = personData.contract.filter((x) => x.item === 'Lägenhet');
      setBostad(b);
      const p = personData.contract.filter(
        (x) => x.item === 'Parkering' || x.item === 'Kallgarage',
      );
      setPakering(p);
      const f = personData.contract.filter((x) => x.item === 'Föråd');
      setForad(f);
      const o = personData.contract.filter(
        (x) =>
          x.item !== 'Föråd' &&
          x.item !== 'Lägenhet' &&
          x.item !== 'Parkering' &&
          x.item !== 'Kallgarage',
      );
      setOvrigt(o);
    }
  }, [personData]);
  const tema = (e) => {
    let value = e.target.value;

    const obj = {
      epost: personData.epost,
      tema: value,
    };
    updateUserTheme(obj);
    temaColor(value);
    setT(value);
  };
  const loopArr = (d, str) => {
    return (
      <span>
        <div style={{ marginLeft: '40px' }}>
          <b>{str}</b>
        </div>
        <ul style={{ listStyle: 'none' }}>
          {d.map((data, index) => {
            return (
              <li style={{ paddingBottom: '10px' }} key={index}>
                <Link to={`/kontrakt:${data.objId}`}>{data.item}</Link>
              </li>
            );
          })}
        </ul>
      </span>
    );
  };

  if (!personData) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Header />
      <Meny />
      <div className="marginTop minaSidorImg"></div>
      <h3 style={{ textAlign: 'center' }}>Mina sidor för {personData.name}</h3>
      <hr className="minasidorHr" />
      <h4 style={{ marginLeft: '35px' }}>Mina kontrakt:</h4>
      <div style={{ display: 'flex' }}>
        {loopArr(bostad, 'Bostad:')}
        {loopArr(pakering, 'Pakering:')}
        {loopArr(forad, 'Föråd:')}
        {loopArr(ovrigt, 'Övrigt:')}
        <div style={{ marginLeft: '100px' }}></div>
        <h4 style={{ position: 'relative', top: '-60px' }}>Tema:</h4>
        <div style={{ position: 'relative', left: '-30px' }}>
          <select className="minasidorSelectTheme" onChange={tema} value={t}>
            <option value="o">Orange</option>
            <option value="r">Röd</option>
            <option value="g">Grön</option>
            <option value="b">Blå</option>
          </select>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MinaSidor;
