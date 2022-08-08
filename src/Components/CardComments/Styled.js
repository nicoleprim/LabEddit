import styled from 'styled-components'

export const Container = styled.div`
    background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 0.75rem;
margin-bottom: 0.625rem;
@media(min-width: 480px) {
   
  overflow: auto;
  width: 500px;
}
`

export const ContainerPost = styled.div`
display: flex;
flex-direction: column;
position: relative;
top:3rem;
width: 330px;
margin-left: 1.5rem;
margin-right: 1.5rem;
@media(min-width: 480px) {
   width: 500px;
}
`


export const Text = styled.p`
font-family: 'IBM Plex Sans', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 1rem;
color: #000000;
padding-left: 1.125rem ;
padding-right: 1.125rem ;
`
export const Icones = styled.div`
display: flex;
flex-direction: row;
gap:1.25rem;
padding-left: 0.625rem;
padding-bottom: 0.625rem;
p{
    font-family: 'Noto Sans';
font-style: normal;
font-size: 0.625rem;
color: #6F6F6F;
}
`

export const Dados = styled.p`
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 9.56098px;
line-height: 12px;
text-align: center;
color: #6F6F6F;
` 

export const User = styled.p`
font-family: 'IBM Plex Sans', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 0.75rem;
line-height: 1rem;
color: #6F6F6F;
padding-left:1.125rem ;
`

export const IconesUm = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
min-width: 5rem;
left: 0.313rem;
height: 1.875rem;
border: 0.796748px solid #ECECEC;
border-radius: 1.75rem;
button{
    background-color: #FBFBFB;
    border: none;
    color: none;
    cursor: pointer;
}
`

export const Comentarios = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
min-width: 3.125rem;
left: 6.25rem;
height: 1.875rem;
border: 0.796748px solid #ECECEC;
border-radius: 1.75rem;
`