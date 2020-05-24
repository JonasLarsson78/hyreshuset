import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../main';
import MinaSidor from '../minaSidor/minaSidor';
import OmOss from '../omoss/omoss';
import KontaktaOss from '../kontakt/kontakt';
import Ledigt from '../ledigt/ledigt';
import Kontrakt from '../minaSidor/kontrakt';
import Info from '../info/info';

const Routers = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/minasidor" component={MinaSidor} />
      <Route path="/kontrakt:id" component={Kontrakt} />
      <Route path="/omoss" component={OmOss} />
      <Route path="/kontakt" component={KontaktaOss} />
      <Route path="/ledigt" component={Ledigt} />
      <Route path="/info:obj" component={Info} />
    </Router>
  );
};

export default Routers;
