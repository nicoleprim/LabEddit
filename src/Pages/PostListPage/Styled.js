import styled from 'styled-components'

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
margin-top: 30px;
`

export const InputUm = styled.textarea`
width: 330px;
height: 40px;
background-color: #EDEDED;
border: none;
border-radius: 12px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
color: #6F6F6F;
padding-left: 1rem;
@media(min-width: 480px) {
    width: 500px;
}
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
margin-top: 12px;
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
position: absolute;
width: 330px;
height: 47px;
top: 265px;
}
@media(min-width: 480px) {
    
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
    margin-top: 62px;
}
@media(min-width: 480px) {
    
}
`