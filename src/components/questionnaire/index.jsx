import * as React from "react"
import { useEffect } from "react"
import "./index.scss"

const QuestionnairePage = ({ sessionId, finishedLoading }) => {
  useEffect(finishedLoading ,[finishedLoading]);

  return (<div id="container">Questionnaire: {sessionId}</div>)
}

export const Questionnaire = (props) => <QuestionnairePage {...props} />;
