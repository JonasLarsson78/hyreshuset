import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { getRentalData } from '../firebaseFunction/function';

import { Context } from '../Context/context';

import Header from '../../components/header';
import Meny from '../../components/meny';
import Footer from '../../components/footer';

import './ledig.css';

const Ledigt = () => {
  const { ledigtData, setLedigtData } = useContext(Context);
  useEffect(() => {
    getRentalData().then((res) => {
      if (res.data) {
        const ledigt = res.data.data[0].lagenheter;

        setLedigtData(ledigt);
      }
    });
  }, [setLedigtData]);

  return (
    <>
      <Header />
      <Meny />
      <div className="marginTop ledigImg"></div>
      <h3 style={{ textAlign: 'center' }}>Ledigt</h3>
      <div style={{ padding: '10px 60px 10px' }}>
        <table className="ledigTable" border="0">
          <thead className="ledigTh">
            <tr>
              <th>Adress:</th>
              <th>Rum:</th>
              <th>Storlek:</th>
              <th>Våning:</th>
              <th>Hyra:</th>
              <th>Info:</th>
            </tr>
          </thead>
          <tbody>
            {ledigtData.map((x, index) => {
              return (
                <tr style={{ borderBottom: '1px solid black' }} key={index}>
                  <td style={{ width: 'auto' }}>{x.adress + ', ' + x.stad}</td>
                  <td style={{ width: '80px' }}>{x.rum}</td>
                  <td style={{ width: '80px' }}>{x.storlek + ' m²'}</td>
                  <td style={{ width: '80px' }}>{x.vaning}</td>
                  <td style={{ width: '150px' }}>{x.hyra}</td>
                  <td style={{ width: '120px' }}>
                    <Link to={`/info:${x.objId}`}>
                      <button className="ledigInfoBtn">Info</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table className="ledigTableMobil">
          <thead className="ledigTh">
            <tr>
              <th>Adress:</th>
              <th>Info:</th>
            </tr>
          </thead>
          <tbody>
            {ledigtData.map((x, index) => {
              return (
                <tr key={index}>
                  <td>{x.adress + ', ' + x.stad}</td>
                  <td>
                    <Link to={`/info:${x.objId}`}>Info</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Ledigt;
