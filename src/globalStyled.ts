import styled, { createGlobalStyle } from 'styled-components';


 export const GlobalStyled = createGlobalStyle`
*{ 
    margin:0px;
    box-sizing: content-box;
    color: #ccd6f6;
&::-webkit-scrollbar-thumb {
    background-color:#495670;
    border: 7px solid #112240;
    border-radius: 10px;
}
&::-webkit-scrollbar {
    width: 20px;
}
&::-webkit-scrollbar-track {
    background: #112240;
}
&::-webkit-scrollbar-corner{
    display:none;
}

}
body{
    background-color: #112240;
}
a, svg{
    text-decoration:none;
    color: inherit;
    font-family: 'Roboto Mono';
    cursor:pointer;
    font-weight: 100;
}
button{
    cursor :pointer;
    background-color: #112240;
    padding: 0.75rem 1rem;
border: 1px solid #64ffda;
border-radius: 4px;
margin:0px 50px;
font-size: 12px;
transition:all .2s ;
&:active{
    background-color: rgb(77 101 141) ;
}
}
h2{
    font-family:  system-ui;
}
section{
    font-size: 18px;
    padding-top: 30px;
    color:#02d3a1;
}
svg{
    transition: all .2s ;
    &:hover{
        transform: translateY(-2px);
        filter: drop-shadow(0px 0px 4px #02d3a1);
    }
}
p{
    
    color:#02d3a1;
}
 `
