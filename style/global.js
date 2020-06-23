import { createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
  html,
  body{
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    line-height: 1.2;
    font-size: calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)));
    margin: 0;
    padding: 0;
    color: rgba(198,201,216,.75);   
  }
  
  * {
      box-sizing: border-box;
    }
    
    img {
     max-width: 100%;
    }
    
    a {
      transition: all 0.4s ease-in-out 0s;
      outline: none;
      text-decoration: none;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    address,
    p,
    pre,
    blockquote,
    dl,
    dd,
    menu,
    ol,
    ul,
    table,
    caption,
    hr {
      margin: 0;
      margin-bottom: 15px;
    }
    
    a:hover,
    a:focus,
    a:active {
      text-decoration: none;
      outline: none;
    }
    a:visited {
      color: inherit;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5{
      margin: 2.75rem 0 1.05rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      line-height: 1.15;
    }
    h1{
     margin: 0;
     font-size: 4.209rem;
    }
    
    h2 {font-size: 3.157em;}

    h3 {font-size: 2.369em;}
    
    h4 {font-size: 1.777em;}
    
    h5 {font-size: 1.333em;}
    
    small, .text_small {font-size: 0.75em;}
    
    ul.menu-item li a.active{
      border-bottom: 2px solid ${({theme})=>theme.primaryRed};
      color: ${({theme})=>theme.primaryRed} !important;
      transition: 0.3s ease-in-out;
    }
    
      ul.menu-item li a.active a{
       color: ${({theme})=>theme.primaryRed} !important;
      }
      
      @media screen and (max-width: ${({theme})=>theme.tablet}){
        h1{
          font-size: 3.5rem
        }
        h2{
          font-size: 2.5rem;
        }
        h3{
          font-size: 2.2rem;
        }  
      }
`;