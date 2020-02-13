import styled from 'styled-components';
import React from 'react';
import Card from '../components/Card';
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

const Row = styled.div`
  display: inline-block;
`;

const Col = styled.div`
  width: calc(${props => props.size / 12} * 100%);
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