import React, { useState, useEffect } from "react";
import {
  QuizContainer,
  QuizElements,
  QuizQuestion,
  QuizButton,
  QuizContentButtons,
  QuizContentContainer,
  QuizCompleteText,
  MovieCard,
  MovieTitle,
  QuizContentGrid,
  QuizCompleteContainer,
  QuizCompleteTextContainer,
} from "./QuizStyles";
import {
  QuizIntroContainer,
  QuizIntroElements,
  QuizIntroSmallText,
  QuizIntroButton,
  QuizIntroTitle,
} from "./QuizIntroStyles";
import IntroAnimation from "../../Modules/IntroAnimation/IntroAnimation";
import { genreanswers, questions } from "../../Data/QuizElements";
import { useDispatch, useSelector } from "react-redux";
import { genreSelected } from "../../Reducers/GenreReducer";
import { useGetMoviesByGenreQuery } from "../../Services/GetMovies";
import CircleLoader from "../../Modules/CircleLoader/CircleLoader";

function Quiz() {
  const [isloading, setIsLoading] = useState(false);
  const [displayintro, setDisplayIntro] = useState(false);
  const [displayquiz, setDisplayQuiz] = useState(false);
  const [index, setIndex] = useState(0);
  const [quizLength] = useState(questions.length);
  const [showQuizComplete, setQuizComplete] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [skip, setSkip] = useState(true);
  const dispatch = useDispatch();

  const genre = useSelector((state) => state.genreSlice.genre.text);
  const { data, error, isLoading, isUninitialized } = useGetMoviesByGenreQuery(
    genre,
    { skip }
  );

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setDisplayIntro(true);
    }, 2000);
  }, []);

  const startQuizHandler = () => {
    setDisplayIntro(false);
    setDisplayQuiz(true);
  };
  const quizProgressHandler = (e) => {
    if (index === quizLength - 1) {
      setQuizComplete(true);
      setIndex(0);
    } else {
      setIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }
  };
  const handleButtonClickGenre = (index, e) => {
    setActiveButton(index);
    dispatch(genreSelected(e.target.value));
  };
  const handleMovies = () => {
    setSkip(false);
  };

  return (
    <QuizContainer>
      {isloading ? <IntroAnimation /> : null}
      {displayintro ? (
        <QuizIntroContainer>
          <QuizIntroElements>
            <QuizIntroTitle>Netflux</QuizIntroTitle>
            <QuizIntroSmallText>
              Netflux is a Netflix helper <br /> designed to provide movie
              suggestions
            </QuizIntroSmallText>
            <QuizIntroButton onClick={startQuizHandler}>Begin</QuizIntroButton>
          </QuizIntroElements>
        </QuizIntroContainer>
      ) : null}

      {displayquiz && !showQuizComplete ? (
        <QuizElements>
          <QuizQuestion key={questions[index].id}>
            {questions[index].questionName}
          </QuizQuestion>

          <QuizContentContainer>
            {index === 0 ? (
              <>
                {genreanswers.map((genre) => {
                  return (
                    <QuizContentGrid key={genre.id}>
                      <QuizContentButtons
                        style={
                          activeButton === genre.id
                            ? { backgroundColor: "white", color: "black" }
                            : {}
                        }
                        onClick={(e) => handleButtonClickGenre(genre.id, e)}
                        value={genre.questionAnswer}
                      >
                        {genre.icon}
                        {genre.questionAnswer}
                      </QuizContentButtons>
                    </QuizContentGrid>
                  );
                })}
              </>
            ) : null}
          </QuizContentContainer>
          <QuizButton onClick={() => quizProgressHandler()}>Next</QuizButton>
        </QuizElements>
      ) : null}
      {showQuizComplete ? (
        <>
          <QuizCompleteTextContainer>
            <QuizCompleteText>
              Click the button to see your movie recommendations!
            </QuizCompleteText>
            {isUninitialized ? (
              <QuizButton onClick={() => handleMovies()}>Lets go!</QuizButton>
            ) : isLoading ? (
              <CircleLoader />
            ) : null}
          </QuizCompleteTextContainer>
          <QuizCompleteContainer>
            {error ? (
              <>Error: {error.message} </>
            ) : data ? (
              data.results.map((movie) => {
                return (
                  <MovieCard key={movie.imdb_id}>
                    <MovieTitle>{movie.title}</MovieTitle>
                  </MovieCard>
                );
              })
            ) : null}
          </QuizCompleteContainer>
        </>
      ) : null}
    </QuizContainer>
  );
}

export default Quiz;
