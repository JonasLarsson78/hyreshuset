import React, { useContext, useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Context } from '../Context/context';

import { planImgId } from '../planImg/planImg';

import Header from '../header';
import Meny from '../meny';

import './minasidor.css';

const Kontrakt = () => {
  const { personData } = useContext(Context);
  const [minasidor, setMinaSidor] = useState(false);
  const [data, setData] = useState({});
  const [planPic, setPlanPic] = useState('/img/planritning.jpg');

  let { id } = useParams();

  let objId = id.substr(1);

  useEffect(() => {
    if (personData) {
      let kontrakt = personData.contract.find((x) => x.objId === objId);

      setData(kontrakt);
    }
  }, [objId, personData]);

  useEffect(() => {
    if (planImgId.includes(data.objId)) {
      setPlanPic('/img/' + data.objId + '.jpg');
    }
    return () => {
      setPlanPic('/img/planritning.jpg');
    };
  }, [data]);
  const fromDate = (date) => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  if (minasidor) {
    return <Redirect to="/minasidor" />;
  }
  if (!personData) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />
      <Meny />
      <div className="marginTop kontraktContainer">
        <img className="kontraktPlanImg" src={planPic} alt="plan" />
        <table className="kontraktTable" border="1">
          <tbody>
            <tr>
              <td
                style={{
                  textAlign: 'center',
                  fontSize: '25px',
                  height: '70px',
                }}
                colSpan="4"
              >
                <b>{data.item + ': ' + data.adress + ' på ' + data.omrade}</b>
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="kontraktTdColor" />
            </tr>
            <tr>
              <td>
                <b>Storlek:</b>
              </td>
              <td>{data.storlek + ' m²'}</td>
              <td>
                <b>Hyra:</b>
              </td>
              <td>{data.hyra}</td>
            </tr>
            <tr>
              <td>
                <b>Från och med:</b>
              </td>
              <td>{fromDate(data.från)}</td>
              <td>
                <b>Uppsägningstid:</b>
              </td>
              <td>{data.uppsagningstid}</td>
            </tr>
            <tr>
              <td colSpan="4" className="kontraktTdColor" />
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <button
          className="kontraktMinaSidorBtn"
          onClick={() => setMinaSidor(true)}
        >
          Tillbaka
        </button>
      </div>
    </>
  );
};

export default Kontrakt;
