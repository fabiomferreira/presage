import styled from 'styled-components'
import {colors, spacing, boxShadow} from '../assets/styles';

const Button = styled.button`
  background: ${colors.primary};
  color: ${colors.white};
  font-size: ${spacing.base};
  padding: ${spacing.small} ${spacing.base};
  font-weight: bold;
  border: none;
  box-shadow: ${boxShadow.base};
  cursor: pointer;
`


export default Button;