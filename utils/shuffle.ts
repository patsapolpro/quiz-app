import { questions } from "@/data/questions";
import { Question } from "@/types/type";

export const getRandomQuestions = (num: number): Question[] => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num).map(question => ({
    ...question,
    answers: question.answers.sort(() => 0.5 - Math.random()),
  }));
};