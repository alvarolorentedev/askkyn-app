import * as React from "react"
import { useEffect, useState } from "react"
import "./index.scss"
import { Button, Table, Form } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const SummaryPage = ({ sessionId, finishedLoading, db, activateQuestion }) => {
  const [questions, setQuestions] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  useEffect(finishedLoading ,[finishedLoading]);
  useEffect(() => {
    db.changes({
      live: true,
      include_docs: true,
      doc_ids: [sessionId]
    }).on('change', ({doc}) => setQuestions(doc.questions));
  } ,[]);

  const setActive = (index) => {
    activateQuestion(index)
    setActiveQuestionIndex(index)
  }
  
  return (<>
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
