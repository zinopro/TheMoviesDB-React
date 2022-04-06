import React from 'react';
import styled from 'styled-components';


const MovieItems = ({ header, children }) => (
  <Container>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Container>
);

//Styled components
const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: var(--maxWidth);
  width: 1280px;
  
  h1 {
    color: var(--medGrey);

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 2rem;
`;


export default MovieItems;


