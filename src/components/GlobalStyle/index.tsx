import { createGlobalStyle, GlobalStyleClass } from 'styled-components';

// Styles.
import palette from '../../styles/palette';

export const GlobalStyle:  GlobalStyleClass<void, void> = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("${require('../../fonts/roboto/Roboto-Regular.ttf')}") format("truetype"),
      url("${require('../../fonts/roboto/Roboto-Regular.woff')}") format("woff"),
      url("${require('../../fonts/roboto/Roboto-Regular.woff2')}") format("woff2");
  }

  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    src: url("${require('../../fonts/roboto/Roboto-Italic.ttf')}") format("truetype"),
      url("${require('../../fonts/roboto/Roboto-Italic.woff')}") format("woff"),
      url("${require('../../fonts/roboto/Roboto-Italic.woff2')}") format("woff2");
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url("${require('../../fonts/roboto/Roboto-Bold.ttf')}") format("truetype"),
      url("${require('../../fonts/roboto/Roboto-Bold.woff')}") format("woff"),
      url("${require('../../fonts/roboto/Roboto-Bold.woff2')}") format("woff2");
  }

  html,
  body,
  #root {
    margin: 0;
    width: 100%;
  }
  
  h1,
  h2,
  h3,
  h4,
  p,
  a {
    color: ${palette.primary.grey};
    font-weight: 400;
    margin: 0;
  }
    
  h1 {
    font-size: 3.2rem;
  }
    
  h2 {
    font-size: 2.5rem;
  }
    
  h3 {
    font-size: 1.8rem;
  }
    
  h4 {
    font-size: 1.3rem;
  }
    
  a,
  p {
    font-size: 1rem;
  }
    
  a {
    display: inline-block;
    text-decoration: none;
    transition: all 250ms ease-in-out;
        
    &:hover {
      color: ${palette.primary.lightGrey};
    }
  }
`;
