import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Poster = ({ image, movieId, clickable }) => (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt='movie-thumb' />
        </Link>
      ) : (
        <Image src={image} alt='movie-thumb' />
      )}
    </div>
  );

  export default Poster;


//Styled components
const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animatePoster .4s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animatePoster  {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


// type Props = {
//   children: Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">
//}
  