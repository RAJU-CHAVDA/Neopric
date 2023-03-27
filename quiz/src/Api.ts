
import { shuffleArray } from "./utils";

export type Question ={
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answer: string[];
    question: string;
    type: string;
};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",

};

export type QuestionState = Question & {answers: string[]};

export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty): Promise<QuestionState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    // const Data = await (data).json();
    // console.log(data);
    return data.results.map((question: Question) => ({
            ...question,
            answers: shuffleArray([...question.incorrect_answer,question.correct_answer])
        }))
    };