import { createGlobalStyle } from 'styled-components';

export const CSSStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --lightRed: #ff4351;
    --darkRed: #f93646;
    --lightGrey: #222931;
    --darkGrey: #1b1c20;
    --fontSuperBig: 2.5rem;
    --fontLarge: 1.4rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    --boldFont: 700;
    --maxWidth: 1280px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;


