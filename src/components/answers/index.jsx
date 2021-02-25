import * as React from "react"
import { useEffect, useState } from "react"
import "./index.scss"
import { Card } from "react-bootstrap"

const AnswersPage = ({ sessionId, username, finishedLoading, answerQuestion, subscribeChanges }) => {
  useEffect(finishedLoading ,[finishedLoading]);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  useEffect(finishedLoading ,[finishedLoading]);
  useEffect(() => {
    subscribeChanges(sessionId, 
      ({doc}) => {
        setQuestions(doc.questions)
        setActiveQuestionIndex(doc.active)
      })
  } ,);
  return activeQuestionIndex != null
    ? (<>
        <h1>{questions[activeQuestionIndex].question}</h1>
        {
          questions[activeQuestionIndex].answers.map((answer, index) =>(
            <Card key={`answer_${index}`} className={index === selectedAnswer ? 'answer-card-selected' : 'answer-card' } onClick={() => {
              setSelectedAnswer(index)
              answerQuestion(sessionId, username, activeQuestionIndex, index)
            }}>
              <Card.Body>
                <Card.Title>#{index}</Card.Title>
                <Card.Text>{answer.value}</Card.Text>
              </Card.Body>
            </Card>
          ))
        }
        {/* {JSON.stringify(questions[activeQuestionIndex])} */}
      </>)
    : (<>Welcome {username} wait for owner to start survey</>)
}

export const Answers = (props) => <AnswersPage {...props} />;
