import React from 'react';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle';
import FortuneTellerCard from '../components/FortuneTellerCard';

const fortuneTellers = [
  {
    id: 1,
    nome: 'João Bidu',
    descricao: 'Especialista em mapa astral',
    foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-U50BfESRpFw%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FN41Rm0tOYV8%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1',
  },
  {
    id: 2,
    nome: 'Walter Mercado',
    descricao: 'Especialista em tarô',
    foto: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-nhyJJS9k_dE%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2Fl1PFnq1QpwM%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1',
  },
]

const StyledFortuneTellers = styled.div``;

const renderFortuneTellers = () => {
  return fortuneTellers.map(fortuneTeller => 
    <FortuneTellerCard key={fortuneTeller.id} data={fortuneTeller}/>);
}

const FortuneTellers = () => (
  <StyledFortuneTellers>
    <PageTitle>Profissionais</PageTitle>
    {renderFortuneTellers()}
  </StyledFortuneTellers>
);

export default FortuneTellers;