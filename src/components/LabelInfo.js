import React from 'react';
import styled from 'styled-components';
import {Col} from '../components/Layout';

import {fontSize, colors} from '../assets/styles';

const Label = styled.label`
  font-size: ${fontSize.label};
  color: ${colors.label};
  font-weight: bold;
`;

const InfoText = styled.span`
  font-Size: ${fontSize.info};
`;

const LabelInfo = ({label, info}) => 
  <div>
    <Col size="12">
      <Label>{label}</Label>
    </Col>
    <InfoText>{info}</InfoText>
  </div>

export default LabelInfo;