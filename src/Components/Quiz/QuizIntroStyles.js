import styled from 'styled-components'

const QuizIntroContainer = styled.div`

`;
const QuizIntroElements = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-top: 3rem;
`;
const QuizIntroTitle = styled.h1`
font-family: 'Bebas Neue', sans-serif;
font-size:4rem;
letter-spacing: 0.4rem;
color: rgb(229, 9, 20);
height: 1rem;
`;
const QuizIntroSmallText = styled.h3`
text-align: center;
font-size:2rem;
color: #fff;
font-family: 'Inconsolata', monospace;

`;
const QuizIntroButton = styled.button`
background-color: #fff;
width: 14rem;
height: 4rem;
border-radius: 1rem;
font-family: 'Bebas Neue', sans-serif;
font-size:2rem;
letter-spacing: 0.4rem;
color: rgb(229, 9, 20);
&:hover{
    cursor:pointer;
    filter:brightness(90%);
}
`;



export {
    QuizIntroButton,
    QuizIntroContainer,
    QuizIntroElements,
    QuizIntroSmallText,
    QuizIntroTitle

}