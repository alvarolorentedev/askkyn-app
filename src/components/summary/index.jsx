import * as React from "react"
import { useEffect, useState } from "react"
import "./index.scss"
import { Button, Table, InputGroup, FormControl } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const SummaryPage = ({ sessionId, finishedLoading, activateQuestion, subscribeChanges }) => {
  const baseUrl = window.location.href.split("/")
  const sessionUrl = `${baseUrl[0]}//${baseUrl[2]}/session/${sessionId}`
  const [urlArea, setUrlArea] = useState(null)
  const [questions, setQuestions] = useState([])
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null)
  useEffect(finishedLoading ,[finishedLoading])
  useEffect(() => {
    subscribeChanges(sessionId, 
      ({doc}) => {
        setQuestions(doc.questions)
      })
  });

  const setActive = (index) => {
    activateQuestion(sessionId, index)
    setActiveQuestionIndex(index)
  }
  const copyUrlToClipboard = () => {
    urlArea.select()
    document.execCommand("copy")
  }
  return (<>
    <InputGroup className="mb-3">
    <FormControl
      ref={(textarea) => setUrlArea(textarea)}
      placeholder="Session Url"
      aria-label="Session Url"
      aria-describedby="basic-addon2"
      value={sessionUrl}
      readOnly={true}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={copyUrlToClipboard}>Copy</Button>
    </InputGroup.Append>
  </InputGroup>
    <Table striped hover size="sm" data-testid="main-table">
        <thead>
            <tr>
                <th>Question</th>
                <th>Answers</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {
            questions.map((question, index) => 
              (<tr key={`question_${index}`}>
                <td>
                  {question.question}
                </td>
                <td>{question.answers.map((answer) => 
                  (<div>
                    {answer.value} ({answer.votes.length}): {answer.votes.toString()}
                  </div>))}
                </td>
                <td>
                  <div className="actions">
                    <Button onClick={() => setActive(index)} disabled={index === activeQuestionIndex}><FontAwesomeIcon icon={['fas', 'play']} /></Button>
                  </div>
                </td>
              </tr>))
          }
        </tbody>
    </Table>
  </>)
}

export const Summary = (props) => <SummaryPage {...props} />;
