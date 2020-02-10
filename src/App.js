import React from 'react';
import styled from 'styled-components';
import './App.css';
import FortuneTellers from './views/FortuneTellers';
import {spacing} from './assets/styles';

const StyledApp = styled.div`
  padding: ${spacing.base};
`

function App() {
  return (
    <StyledApp>
        <FortuneTellers />
    </StyledApp>
  );
}

export default App;
