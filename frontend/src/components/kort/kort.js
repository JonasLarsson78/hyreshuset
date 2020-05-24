import React, { useContext } from 'react';
import './kort.css';

import { Context } from '../Context/context';

const Kort = ({ name, btnText, imgSrc, top }) => {
  const { kortRedirect, setkortRedirect } = useContext(Context);

  const button = () => {
    const filter = kortRedirect.filter((data) => {
      for (let key in data) {
        if (key === name) {
          data[key] = true;
        } else {
          data[key] = false;
        }
      }
      return data;
    });

    setkortRedirect(filter);
  };

  return (
    <div className="kortContainer" style={{ top }}>
      <img alt={btnText} src={imgSrc} className="kortImg" />
      <button onClick={button} className="kortBtn">
        {btnText}
      </button>
    </div>
  );
};

export default Kort;
