import styled, { keyframes } from 'styled-components'


const fadeanim = keyframes`
 100%{scale: 1.1}
 
`;
const IntroAnimationContainer = styled.div``;
const IntroAnimationElements = styled.div`
padding-top: 2rem;
`;
const IntroAnimationTitle = styled.h1`
font-family: 'Bebas Neue', sans-serif;
font-size:8rem;
letter-spacing: 0.4rem;
color: rgb(229, 9, 20);
animation-name: ${fadeanim};
animation-duration: 5s;

`;


export {
    IntroAnimationContainer,
    IntroAnimationElements,
    IntroAnimationTitle
}