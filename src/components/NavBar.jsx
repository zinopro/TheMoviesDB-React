import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import searchIcon from '../images/search-icon.svg';

const NavBar = ({ dispatch }) => {
  const [searchValue, setSearchValue] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      dispatch({type:'SEARCH_TERM', payload: { searchTerm: searchValue } });
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue, dispatch]);

  return (
    <Container>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder='Search Movie'
          onChange={event => setSearchValue(event.target.value)}
          value={searchValue}
        />
      </Content>
    </Container>
  );
};

export default NavBar;


//Styled components
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: var(--maxWidth);
  width: 1280px;
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 50px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 4px;
    top: 14px;
    width: 30px;
  }

  input {
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 40px;
    border: 0;
    width: 95%;
    font-size: var(--fontMed);
    font-weight: var(--boldFont);
    background: transparent;
    height: 40px;
    color: var(--white);

    :focus {
      outline: none;
    }

    ::placeholder {
        color: #d9cccc;
        opacity: 1;
    }
  }
`;