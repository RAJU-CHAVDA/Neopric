import React, {useState} from "react";
import { fetchQuizQuestions } from "./Api";
import QuizCard from "../src/components/QuizCard"
import { QuestionState, Difficulty } from "./Api";
import { GlobalStyle, Wrapper } from "./App.style";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [ userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [ score, setScore] = useState(0);
  const [ gameover, setGameover] = useState(true);

//  console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))

  const startQuiz = async () => {
    setLoading(true);
    setGameover(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);

  };

  const checkAnswer = (e: any) => {
      if (!gameover){
        const answer = e.currentTarget.value;
        const correct = questions[number].correct_answer === answer;
        if(correct) setScore(prev => prev + 1);
        const answerObject = {
          question: questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer,
        };
        setUserAnswers((prev) => [...prev, answerObject]);
      }

  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if(nextQ === TOTAL_QUESTIONS){
      setGameover(true)     
    }
    else{
      setNumber(nextQ);
    }

  };

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>React Quiz App</h1>
      {gameover || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startQuiz}>
        Start Quiz
      </button>
      ) : null}       
      {!gameover ? <p className="score">Score: {score}</p> : null}
      {loading ? <p>Loading Questions...</p> : null}
      {!loading && !gameover && (
        <QuizCard
          questionNr={number + 1}
          totalQuestions = {TOTAL_QUESTIONS}
          question = {questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback= {checkAnswer}    
        />
      )}
      {!gameover && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?(
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ):null}

    </Wrapper>
    </>
  );
};

export default App;
