import React from 'react';
import Main from './src/Container';
import ReduxContainer from './src/store';

const App = () =>
  <ReduxContainer>
    <Main />
  </ReduxContainer>

export default App;