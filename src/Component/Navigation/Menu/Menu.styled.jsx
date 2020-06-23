// Menu.styled.js
import styled from 'styled-components';
import {theme} from "../../../../style/theme";

export const StyledMenu = styled.nav`
  position:fixed;
  width: 60vw;
  height: 100%;
  top: 0;
  z-index: 99;
  list-style: none;
  background: ${({theme})=>theme.mobileBg};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  -webkit-transition: all .8s cubic-bezier(.77,.2,.05,1);
  transition: all .8s cubic-bezier(.77,.2,.05,1);
  @media (max-width: ${({theme})=>theme.tablet}){
    padding: 50px 20px;
    width: 70vw;
    left: 0;
  }
  
  .mobile-menu-slider{
    position:relative;
    ul.menu-item{
    list-style: none;
    padding: 50px;
    margin: 0;
    li{
        margin: 0;
        padding: 10px 0;
        .active{
          color: ${({theme})=>theme.primaryRed};
        }
       a{
            color: #fff;
            outline: none;
            text-decoration: none;
            display: block;
            padding: 0;
            font-weight: 500;
            font-size: 1.2rem;
            &:hover{
              color: ${({theme})=>theme.primaryRed};
            }
        }
    }
    
    }
  }
  
  .is-current {
    a{
        color: red;
        &::after {
            width: 100%;
        }
    }
  @media (max-width: ${({ theme }) => theme.mobile}) {

  }

`;
