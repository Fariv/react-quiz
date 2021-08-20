import React from "react";
import { AnswerObject } from "../App";
import { QuestionCardDiv, OptionsDiv, OptionsButton } from "../styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <QuestionCardDiv>
      <h3>Question Card</h3>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <OptionsDiv>
        {answers.map((answer, index) => (
          <div key={index}>
            <OptionsButton
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </OptionsButton>
          </div>
        ))}
      </OptionsDiv>
    </QuestionCardDiv>
  );
};

export default QuestionCard;
