import React from 'react';

import styled from 'styled-components';
import Poster from './Poster';
import { Result, iMovieInfo } from '../Model/Movies';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../utils/api-config';
import NoPoster from '../images/no_image.jpg';


interface Director extends Result {
  credit_id: number;
  name: string;
}

type IBackdrop = {
  backdrop: string;
}

const MovieInfo: React.FC<iMovieInfo>  = ({ poster_path, backdrop_path, title, overview, vote_average, directors = [] }) => (
  <Container backdrop={backdrop_path ? backdrop_path: ""}>
    <Content>
      <Poster
        image={
          poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
            : NoPoster
        }
        clickable={false}
      />
      <Text>
        <h1>{title}</h1>
        <h3>PLOT</h3>
        <p>{overview}</p>

        <div className='rating-directors'>
          <div>
            <h3>RATING</h3>
            <div className='score'>{vote_average}</div>
          </div>
          <div className='director'>
            <h3>DIRECTOR{directors.length > 1 ? 'S' : ''}</h3>
            {directors?.map((director: Director)  => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Container>
);


//Styled components
export const Container = styled.div<IBackdrop>`
  margin: 0 auto;
  padding: 40px 20px;
  height: auto;
  max-width: var(--maxWidth);
  background: ${({ backdrop }) =>
  backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;

  animation: animateMovieInfo .4s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  padding: 20px 40px;
  width: 100%;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;


export default MovieInfo;