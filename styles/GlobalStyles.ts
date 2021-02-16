import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
 *,*::after,*::before{
     box-sizing: border-box;
     padding: 0;
     margin: 0;
     user-select: none;
 }

 html{
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: 62.5%; 
    @media only screen and (max-width: 770px){
      font-size: 50%
    }
    @media only screen and (max-width: 480px){
      font-size: 40%
    }

  }

  body {
    width: 100vw;
    font-family:"Open Sans", sans-serif;
    overflow-x: hidden;
  }

  a {
  color: inherit;
  text-decoration: none;
}

`;
export default GlobalStyles;
