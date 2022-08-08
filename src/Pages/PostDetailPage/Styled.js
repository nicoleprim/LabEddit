import styled from 'styled-components'

export const ContainerPost = styled.div`
display: flex;
flex-direction: column;
width: 330px;
margin-top: 30px;
margin-left: 1.5rem;
margin-right: 1.5rem;
@media(min-width: 480px) {
  justify-content: center;
  align-items: center;
    margin: 30px auto auto auto;
}
`

export const Container = styled.div`
    background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 0.75rem;
@media(min-width: 480px) {
    display: flex;
flex-direction: column;
width: 500px;

}
`

export const ContainerForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
`

export const Inputs = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1rem;
position: relative;
`

export const InputDois = styled.textarea`
width: 330px;
height: 131px;
background: #FFFFFF;
background-color: #EDEDED;
border: none;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
border-radius: 12px;
color: #6F6F6F;
margin-top: 0;
padding-left: 1rem;
@media(min-width: 480px) {
  width: 500px;
}
`

export const ButtonForm = styled.div`
display: flex;
justify-content: center;
padding: 12px, 145px, 12px, 145px;
align-items: center;
button{
cursor: pointer;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 23px;
text-align: center;
color: #FFFFFF;
border: none;
border-radius: 27px;
position: relative;
width: 330px;
height: 47px;
top: 1rem;
}
`

export const DivLine = styled.div`
display: flex;
justify-content: center;
position: relative;
height: 1rem;
img{
    height: 1rem;
    width: 330px;
    margin-top: 1.8rem;
}

`