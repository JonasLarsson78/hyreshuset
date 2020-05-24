import React from 'react';

import { ContextProvider } from './components/Context/context';

import Routers from './components/Router/router';

function App() {
  return (
    <ContextProvider>
      <Routers />
    </ContextProvider>
  );
}

export default App;
