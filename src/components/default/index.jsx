import * as React from "react"
import { useEffect } from "react"
import "./index.scss"

const DefaultPage = ({ finishedLoading }) => {
  useEffect(finishedLoading ,[finishedLoading]);

  return (<>
    Welcome to Askkyn
  </>)
}

export const Default = (props) => <DefaultPage {...props} />;
