import styled, { keyframes } from 'styled-components'
import { device } from '../../Components/Breakpoints/Breakpoints';

// @media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.mobileL}) {
// }
// @media only screen and (${device.mobileLSmallerBP}) and (${device.pixelBP}) {
// }
// @media only screen and (${device.tabletSmallerBP}) and (${device.tablet}) {
// }
// @media only screen and (${device.laptopSmallerBP}) and (${device.laptop}) {
// }
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
@media only screen and (${device.mobileMSmallerBP}) and (${device.mobileM}) {
    font-size: 6rem;
 }
`;


export {
    IntroAnimationContainer,
    IntroAnimationElements,
    IntroAnimationTitle
}