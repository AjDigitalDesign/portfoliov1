import styled from "styled-components";
import {theme} from "../../../../style/theme";

export const StyledDesktop = styled.div`

  padding: 10px 0;
   position: fixed;
   top: 0;
   z-index: 9;
   background: ${({theme}) => theme.primaryColor};
   width: 100%; 
   box-shadow: 0 0 10px rgba(0,0,0,.1);
   transition: 0.3s;
    @media (min-width: ${({theme}) => theme.md}){
        padding: 0;
      }
   
  .navbar-area{
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    .navbar-brand-area{
      a{
        -webkit-transition: all .4s ease-in-out 0s;
        transition: all .4s ease-in-out 0s;
        img{
            -webkit-transition: .5s;
            transition: .5s;
            height: 50px;
        }
      }
    }
    .navbar-menu{
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-between;
        li{
          margin: 0 15px;
          position: relative;
          display: flex;
          &:first-child{
            margin-left: 0;
          }
          a{
            position: relative;
            color: #fff;
            font-weight: 500;
            padding: 12px 0;
            display: inline-block;
            -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
            transition: all .3s cubic-bezier(.645,.045,.355,1);
          }
        }
      }
      @media (max-width: ${({theme}) => theme.md}){
        display: none;
      }
    }
  }
`;
