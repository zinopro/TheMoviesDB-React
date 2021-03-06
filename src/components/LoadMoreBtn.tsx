import React from 'react';
import styled from 'styled-components';


type ILoadButton = {
  value: string;
  callback: () => void;
}

const LoadMoreBtn: React.FC<ILoadButton> = ({ value, callback }) => (
  <Container type='button' onClick={callback}>
    {value}
  </Container>
);

//Styled components
const Container = styled.button`
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 60px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontMed);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export default LoadMoreBtn;
