import styled from 'styled-components'


export const DivImg = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 5rem;
position: relative;
img{
width: 10rem;
height: 12rem;
}
@media(max-width: 480px) {
margin-top: 89px;
img{
width: 152px;
height: 142px;
}
}

`
export const DivP = styled.div`
display: flex;
justify-content: center;
p{ 
font-family: 'IBM Plex Sans';
margin-top: 0;
font-style: normal;
position: absolute;
font-weight: 300;
font-size: 16px;
line-height: 21px;
text-align: center;
color: #000000
}
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
`

export const Inputs = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const InputUm = styled.input`
box-sizing: border-box;
width: 25rem;
height: 60px;
position: absolute;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
top: 395px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #323941;
opacity: 0.8;
padding-left: 1rem;
@media(max-width: 480px) {
top: 359px;
width: 330px;
}
`
export const InputDois = styled.input`
box-sizing: border-box;
width: 25rem;
height: 60px;
position: absolute;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;
top: 465px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #323941;
opacity: 0.8;
padding-left: 1rem;
@media(max-width: 480px) {
top: 427px;
width: 330px;
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
top: 590px;
}
@media(max-width: 480px) {
button{
top: 543px;
width: 330px;
}
}
`

export const DivLine = styled.div`
display: flex;
justify-content: center;
position: relative;
height: 1rem;
img{
    height: 1rem;
    width: 25rem;
    margin-top: 380px;
}
@media(max-width: 480px) {
img{
    margin-top: 375px;
    width: 330px;
}
}
`

export const ButtonSign = styled.div`
padding: 13px, 133px, 13px, 133px;
display: flex;
justify-content: center;
align-items: center;
button{
cursor: pointer;
box-sizing: border-box;
position: absolute;
background-color: white;
height: 51px;
width: 25rem;
top: 680px;
border: 1px solid #FE7E02;
border-radius: 27px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color: #FE7E02;
}
@media(max-width: 480px) {
button{
top: 632px;
width: 330px;
}
}
`