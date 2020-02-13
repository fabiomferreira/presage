import styled from 'styled-components';
import React from 'react';
import Card from '../components/Card';
import LabelInfo from '../components/LabelInfo';
import {Row} from '../components/Layout';
import {spacing} from '../assets/styles';

const StyledFortuneTellerCard = styled.div`
`;

const StyledCard = styled(Card)`
  padding: ${spacing.small};
  margin-bottom: ${spacing.small};
  cursor: pointer;
`

const StyledImage = styled.img`
  width: 100px;
  margin-right: ${spacing.small}
`;

const onClick = () => alert('Você selecionou um(a) cartomante!');

const FortuneTellerCard = ({data}) => 
  <StyledFortuneTellerCard>
    <StyledCard onClick={onClick}>
      <Row>
        <StyledImage src={data.foto} />
        <Row>
          <LabelInfo label="Nome" info={data.nome} />
          <LabelInfo label="Descrição" info={data.descricao} />
          <LabelInfo label="Valor" info={`R$ ${data.valor}/hora`} />
        </Row>
      </Row>
    </StyledCard>
  </StyledFortuneTellerCard>

export default FortuneTellerCard;