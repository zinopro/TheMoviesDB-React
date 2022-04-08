import React from 'react';
import styled from 'styled-components';


type MovieItemProps = {
  searchTerm: string;
}


const MovieItems: React.FC<MovieItemProps> = ({ searchTerm, children }) => (
  <Container>
    <h1>{searchTerm}</h1>
    <Content>{children}</Content>
  </Container>
);

//Styled components
const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: var(--maxWidth);
  background: var(--lightGrey);
  width: 1280px;
  
  h1 {
    margin-top: 0;
    padding: 2% 0;
    color: var(--white);

    @media screen and (max-width: 768px) {
      font-size: var(--fontMed);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 2rem;
`;


export default MovieItems;


