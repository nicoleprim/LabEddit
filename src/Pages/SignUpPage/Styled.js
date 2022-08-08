import styled from 'styled-components'

export const InputTres = styled.input`
box-sizing: border-box;
width: 25rem;
height: 60px;
position: absolute;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
top: 325px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #323941;
opacity: 0.8;
padding-left: 1rem;
@media(max-width: 480px) {
top: 288px;
width: 330px;
}
`

export const DivTitulo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 15rem;
h2{
width: 25rem;
height: 86px;
left: 32px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 43px;
color: #373737;
}
@media(max-width: 480px) {
margin-left: 28px;
width: 80%;
}
`

export const Check = styled.div`
display: flex;
justify-content: center;
align-items: center;
p{
    margin-top: 9px;
width: 25rem;
font-family: 'Noto Sans';
font-style: normal;
font-size: 14px;
line-height: 19px;
color: #000000;
}
@media(max-width: 480px) {
    p{
        margin-top: 20px;
    }
}
`

export const DivP = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 93px;
margin-top: 19.5rem;
p{
width: 25rem;
height: 22px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #000000;
}
a{
    text-decoration: none;
}
@media(max-width: 480px) {
    margin-top: 19rem;
p{
    width: 335px;
    height: 30px;
}
}
`

export const ButtonForm = styled.div`
display: flex;
justify-content: center;
padding: 13px, 133px, 13px, 133px;
align-items: center;
button{
    cursor: pointer;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
border: none;
border-radius: 27px;
position: absolute;
width: 25rem;
height: 51px;
top: 710px;
}
@media(max-width: 480px) {
button{
top: 700px;
width: 330px;
}
}
`