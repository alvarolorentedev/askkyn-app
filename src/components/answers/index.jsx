import * as React from "react"
import { useEffect, useState } from "react"
import "./index.scss"
import { Card } from "react-bootstrap"

const AnswersPage = ({ sessionId, username, finishedLoading, answerQuestion, subscribeChanges }) => {
  useEffect(finishedLoading ,[finishedLoading]);
  const [questions, setQuestions] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  useEffect(finishedLoading ,[finishedLoading]);
  useEffect(() => {
    subscribeChanges(sessionId, 
      ({doc}) => {
        setQuestions(doc.questions)
        setActiveQuestionIndex(doc.active)
      })
  } ,[]);
  return activeQuestionIndex != null
    ? (<>
        <h1>{questions[activeQuestionIndex].question}</h1>
        {
          questions[activeQuestionIndex].answers.map((answer, index) =>(
            <Card className="answer-card" onClick={() => answerQuestion(sessionId, username, activeQuestionIndex, index)}>
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
