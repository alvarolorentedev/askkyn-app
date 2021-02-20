import * as React from "react"
import { useEffect, useState } from "react"
import "./index.scss"
import { Button, Table, Form } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const QuestionnairePage = ({ sessionId, finishedLoading }) => {
  const [questions, setQuestions] = useState([]);
  useEffect(finishedLoading ,[finishedLoading]);

  const addQuestions = () => {
    setQuestions([...questions, {
      question: "",
      answers: [],
    }])
  }
  const removeQuestions = (indexToDelete) => setQuestions(questions.filter((_, index) =>  index !== indexToDelete))
  const updateQuestion = (indexToChange, field, value) => 
    setQuestions(questions.map((question, index) =>  indexToChange === index ? {...question, [field]: value } : question ))

  const updateAnswer = (indexQuestion, indexAnswer, field, value) => 
    updateQuestion(indexQuestion, "answers", questions[indexQuestion].answers.map((answer, index) => indexAnswer === index ? {...answer, [field]: value } : answer ))
  const AddAnswer = (indexQuestion) => 
    updateQuestion(indexQuestion, "answers", [...questions[indexQuestion].answers, { value: "" }])
  const removeAnswer = (indexQuestion, indexToDelete) => 
    updateQuestion(indexQuestion, "answers", questions[indexQuestion].answers.filter((_, index) =>  index !== indexToDelete))

  return (<>
    <Table striped hover size="sm" data-testid="main-table">
        <thead>
            <tr>
                <th>Question</th>
                <th>Answers</th>
                <th><div className="actions">
                    Actions
                    <Button onClick={addQuestions} ><FontAwesomeIcon icon={['fas', 'plus']} /></Button>
                </div></th>
            </tr>
        </thead>
        <tbody>
          {
            questions.map((question, index) => 
              (<tr key={`question_${index}`}>
                <td>
                  <Form.Control type="text" placeholder="Enter Question" value={question.question} onChange={(event) => updateQuestion(index, "question", event.target.value)} />
                </td>
                <td>{question.answers.map((answer, indexAnswer) => 
                  (<>
                    <Form.Control type="text" placeholder="Enter Answer" value={answer.value} onChange={(event) => updateAnswer(index, indexAnswer, "value", event.target.value)} />
                    <Button onClick={() => removeAnswer(index, indexAnswer)}><FontAwesomeIcon icon={['fas', 'trash']} /></Button>
                  </>))}
                </td>
                <td>
                  <div className="actions">
                    <Button onClick={() => updateQuestion(index, "answers", [...question.answers, { value: "" }])}><FontAwesomeIcon icon={['fas', 'plus']} /></Button>
                    <Button onClick={() => removeQuestions(index)}><FontAwesomeIcon icon={['fas', 'trash']} /></Button>
                  </div>
                </td>
              </tr>))
          }
        </tbody>
    </Table>
  </>)
}

export const Questionnaire = (props) => <QuestionnairePage {...props} />;
