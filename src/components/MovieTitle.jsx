import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieTitle = ({ movieTitle }) => (
  <Container>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Container>
);

// Styles components
const Container = styled.div`
  margin: 0 auto;
  height: 60px;
  max-width: var(--maxWidth);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--darkRed);
  color: var(--white);
`;

const Content = styled.div`
  padding: 0 20px;
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);

  span {
    padding-right: 10px;
    font-size: var(--fontMed);
    color: var(--white);


    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;



export default MovieTitle;
