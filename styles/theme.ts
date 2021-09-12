import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  color: {
    green: '#7EA048',
    darkGreen: '#8E8D6F',
    red: '#D7537A',
    wheat: '#FFF0E4',
    white: '#FFF8F5',
    black: '#272626',
  },
  montserrat: "'Montserrat', sans-serif",
  lato: "'Lato', sans-serif",
  gadugi: "'Gadugi', sans-serif",
  candara: "'Candara', sans-serif",
}

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
 
  body{
    background-color: #FCEFE4;
    font-family: ${defaultTheme.montserrat};
    color: ${defaultTheme.color.black};
    font-weight: 500;
  }
 
  p{
   font-family: ${defaultTheme.lato};
   font-size: 18px;
   @media(max-width:576px){
     font-size: 12px;
   } 
  }
 
  h1{
   font-family: ${defaultTheme.montserrat};
   font-size: 64px;
   line-height: 1.2;
   font-weight: bold;
  }
  h1,h2,h3,h4{
    font-family: ${defaultTheme.montserrat};
    line-height: 1.2;
    font-weight: bold;
    
  }
  h1{
    font-size: 64px;
    @media(max-width:576px){
     font-size: 24px;
   } 
  }
  
  h2{
   font-size: 48px;
   @media(max-width:576px){
     font-size: 18px;
   } 
  }
  
  h3{
   font-size: 24px;
   @media(max-width:576px){
     font-size: 16px;
   } 
  }
  
  h4{
   font-size: 18px;
   @media(max-width:576px){
     font-size: 10px;
   } 
  }
 
`
