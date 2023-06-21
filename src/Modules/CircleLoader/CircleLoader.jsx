import React from 'react'
import { motion } from 'framer-motion'
import { styled } from 'styled-components'

const CircleContainer = styled.section`
position: relative;
width: 3rem;
height: 3rem;
`;
const Circle = styled(motion.span)`
display:block;
width: 3rem;
height: 3rem;
border: 0.5rem solid white;
border-top: 0.5rem solid black;
border-radius: 50%;
position: absolute;
box-sizing: border-box;
top: 0;
left: 0;

`;
const Spin = {
    repeat:Infinity,
    duration: 1,
    ease:"linear"
}

function CircleLoader() {
  return (
    <CircleContainer>
        <Circle animate= {{rotate:360}}  transition={Spin}/>
    </CircleContainer>
  )
}

export default CircleLoader