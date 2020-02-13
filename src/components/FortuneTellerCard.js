import styled from 'styled-components';
import React from 'react';
import Card from '../components/Card';
import {Row, Col} from '../components/Layout';
import {spacing, fontSize, colors} from '../assets/styles';

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

const Label = styled.label`
  font-size: ${fontSize.label};
  color: ${colors.label};
  font-weight: bold;
`;

const onClick = () => alert('Você selecionou um(a) cartomante!');

const FortuneTellerCard = ({data}) => 
  <StyledFortuneTellerCard>
    <StyledCard onClick={onClick}>
      <Row>
        <StyledImage src={data.foto} />
        <Row>
          <Col size="12">
            <Label>Nome</Label>
          </Col>
          <span>{data.nome}</span>
          <Col size="12">
            <Label>Descrição</Label>
          </Col>
          <span>{data.descricao}</span>
        </Row>
      </Row>
    </StyledCard>
  </StyledFortuneTellerCard>

export default FortuneTellerCard;