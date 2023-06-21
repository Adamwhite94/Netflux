import styled from "styled-components";

const QuizContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const QuizElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2rem;
`;
const QuizQuestion = styled.header`
  font-family: "Bebas Neue", sans-serif;
  font-size: 3rem;
  letter-spacing: 0.4rem;
  color: #fff;
  text-align: center;
`;
const QuizImage = styled.img``;

const QuizButton = styled.button`
  background-color: #fff;
  width: 14rem;
  height: 4rem;
  border-radius: 1rem;
  font-family: "Bebas Neue", sans-serif;
  font-size: 2rem;
  letter-spacing: 0.4rem;
  color: rgb(229, 9, 20);
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

const QuizContentButtons = styled.button`
  width: 10rem;
  height: 5rem;
  background: none;
  border-radius: 0.7rem;
  color: #fff;
  border: 1px solid white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;
const QuizContentGrid = styled.section`

`;
const QuizContentContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 11rem);
  grid-row-gap: 1rem;
  padding-top: 1rem;
`;
const QuizCompleteText = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #fff;
  font-family: "Inconsolata", monospace;
  padding-top: 2rem;
`;

const MovieCard = styled.article`

`;
const MovieTitle = styled.h1`
  font-size: 1rem;
  color: #fff;
  font-family: "Inconsolata", monospace;
  padding-top: 2rem;
`;


const QuizCompleteContainer = styled.section`
 display: grid;
  grid-template-columns: repeat(3, 10rem);
  grid-column-gap: 3rem;
  justify-content: center;
  align-items: center;
  
`;
const QuizCompleteTextContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;



export {
  QuizContainer,
  QuizElements,
  QuizImage,
  QuizQuestion,
  QuizButton,
  QuizContentButtons,
  QuizContentContainer,
  QuizCompleteText,
  MovieCard,
  MovieTitle,
  QuizContentGrid,
  QuizCompleteContainer,
  QuizCompleteTextContainer
};
