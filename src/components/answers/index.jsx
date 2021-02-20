import * as React from "react"
import { useEffect } from "react"
import "./index.scss"

const AnswersPage = ({ sessionId, username, finishedLoading }) => {
  useEffect(finishedLoading ,[finishedLoading]);

  return (<div id="container">Answers: {sessionId} for {username}</div>)
}

export const Answers = (props) => <AnswersPage {...props} />;
