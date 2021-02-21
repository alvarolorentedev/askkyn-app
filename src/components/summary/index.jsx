import * as React from "react"
import { useEffect } from "react"
import "./index.scss"

const SummaryPage = ({ sessionId, finishedLoading }) => {
  useEffect(finishedLoading ,[finishedLoading]);

  return (<div id="container">Summary: {sessionId} </div>)
}

export const Summary = (props) => <SummaryPage {...props} />;
