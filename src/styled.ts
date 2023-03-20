import styled, { keyframes } from 'styled-components'

export const ContainerHeader = styled.div`
display: flex;
position:sticky;
z-index:10;
justify-content: space-between;
height:100px;
align-items:center;
width: 100%;
top:0px;
background: rgb(17 34 64 / 83%);
    backdrop-filter: blur(4px);
    svg{
        margin-left:30px;
    }
`
export const Ol = styled.ol`
list-style: none;
display: flex;
gap: 30px;
li{
    display: flex;
    align-items: center;
}
a{
    text-decoration:none;
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    font-weight: 400;
}
`
const sombras = keyframes`
0%{
    filter: drop-shadow(0px 0px 0px #02d3a1);
}
100%{
    filter: drop-shadow(0px 0px 20px #02d3a1);
}

`
export const Loade = styled.div`
position:fixed;
width: 100vw;
height: 100vh;
background: rgb(17 34 64 / 83%);
backdrop-filter: blur(4px);
z-index:20;
font-size: 50px;
display:flex;

img{
margin:auto;
animation: ${sombras} 2s infinite;
}
`



export const Nav = styled.nav`
display:flex;
margin-right: 20px;
`
export const Prueva = styled.div`
height: 1000px;
`
export const ContainerSaludo =styled.div`
    width: 900px;
    margin: auto;
    margin-top: 90px;
font-family: system-ui;
p{
    font-family: 'Roboto Mono', monospace;
    font-weight: 400;
    font-size: 13px;
}
h1{
    font-size: 70px;
    text-shadow: 3px 3px 0px #696969;

span{
    text-shadow: 3px 3px 0px #fcfc3a;
    color:#8892b0;
}
}
    
`
export const Redes = styled.div`
display: flex;
flex-direction: column;
position: fixed;
bottom: 0px;
gap:20px;
align-items: center;
left: 50px;
svg{
    width: 25px;
}
`
export const Line = styled.span`
height: 100px;
width: 1px;
background-color: #a8b2d1;
`
export const Hotmail= styled.div`
display: flex;
flex-direction: column;
position: fixed;
bottom: 0px;
right: 50px;
align-items: center;
gap: 20px;
a{
    writing-mode: vertical-rl;
    letter-spacing: 2px;
    font-size: 12px;
    transition: all .5s ;
    &:hover{
        transform: translateY(-4px);
        filter: drop-shadow(0px 0px 4px #02d3a1);
    }

}
`
export const Presentaciones = styled.div`
    width: 900px;
    margin: auto;
    padding: 200px 100px 0px 100px;
    font-family: system-ui;
    h2{
        position: relative;
    top: 15px;
    background-color: rgb(17, 34, 64);
    width: fit-content;
    padding:0px 10px;

    }
    span{
        font-family: 'Roboto Mono';
   font-weight: 100;
    color:#02d3a1;
}
    
    section{
        border-top: 1px solid #1899aa;
    }
    ol{
        padding-top:20px;
        font-family: 'Roboto Mono';
        padding-left: 10px;
        flex-direction: column;
        gap: 10px;
    li::before{
        content: "▹";
        padding-right: 5px;
    }
    }
`

export const MiPresentacion = styled(Presentaciones)`
div{
    display:flex;
}
img{
    margin-top:20px;
    width: 400px;
    height: 200px;
}
`

export const ContainerProyect= styled.div`
    box-shadow: 0 10px 30px -15px rgb(2 12 27 / 0.7);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius:10px;
    background-color: #0c1c36; 
    overflow: auto;
    width: 260px;
    height: 230px;
    margin:8px;
    overflow: hidden;
    svg{
        width: 30px;
    }
    section{
        padding:0px;
        border:none;
        display: flex;
        justify-content: space-between;
    }
    header{
        width: 100%;
    }
    h3{
        padding-top:15px;
    }
    p{
        margin-top:20px;
        color:#02d3a1;
    }
   
    ol{
        padding: 0px;
        display:flex;
        flex-direction: row;
        font-size:11px;
        color:#02d3a1;
        li{
        align-items: baseline;
        }
    li::before{
        content:'';
    }
    }
`

export const Proyectos= styled(Presentaciones)`
width: 1000px;
padding-top:100px;
h2{
    left:20px;
}

ul{
    list-style: none;
    padding: 0px;
    margin: 50px 0px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5px;
    position: relative;
}
`

export const Saludame = styled(Presentaciones)`
flex-direction: column;
    display: flex;
    align-items: center;
    padding: 170px;
    span{
        font-size: 18px;
    }
    p{
        width: 587px;
    text-align: center;
    padding-top: 20px;
    margin-bottom:50px;
    }
    h1{
        font-size: 50px;
    margin: 20px;
    }
`