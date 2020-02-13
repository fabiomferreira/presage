import styled from 'styled-components';

const Row = styled.div`
  display: inline-block;
`;

const Col = styled.div`
  width: calc(${props => props.size / 12} * 100%);
`;

export {
  Row,
  Col,
}