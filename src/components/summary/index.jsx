import * as React from "react"
import { useEffect, useState } from "react"
import "./index.scss"
import { Button, Table, Form } from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const SummaryPage = ({ sessionId, finishedLoading, db }) => {
  const [questions, setQuestions] = useState([]);
  useEffect(finishedLoading ,[finishedLoading]);
  useEffect(() => {
    db.changes({
      live: true,
      include_docs: true,
      doc_ids: [sessionId]
    }).on('change', ({doc}) => setQuestions(doc.questions));
  } ,[]);
  
  return (<>
    <Table striped hover size="sm" data-testid="main-table">
        <thead>
            <tr>
                <th>Question</th>
                <th>Answers</th>
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
              </tr>))
          }
        </tbody>
    </Table>
  </>)
}

export const Summary = (props) => <SummaryPage {...props} />;
