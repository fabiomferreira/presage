import styled from 'styled-components';
import {borderRadius, boxShadow, border} from '../assets/styles';

const Card = styled.div`
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow.base};
  border: ${border.base};
`;

export default Card;