import * as React from "react"
import { useEffect, useState } from "react"
import "./index.scss"
import { Button, Form } from "react-bootstrap"

const StartPage = ({ navigate, sessionId, finishedLoading, create, join }) => {
  const [name, setName] = useState("");
  const [identifier, setIdentifier] = useState("");
  useEffect(finishedLoading ,[finishedLoading]);
  useEffect(() => {
    if(sessionId)
      setIdentifier(sessionId)
  },[sessionId]);
  const onCreate = async () => {
      const result = await create()
      if (result.success)
        navigate(`/session/${result.identifier}/questionnaire`)
  }

  const onJoin = async () => {
      const result = await join(identifier, name)
      if (result.success)
        navigate(`/session/${identifier}/answers/${name}`)
  }
  return (<div id="container">
    {!sessionId && <Button className="btn-start" onClick={onCreate}> Create New</Button>}
    <Form.Control className="form-control-start" type="text" placeholder="Enter Name" value={ name } onChange={(event) => setName(event.target.value)} />
    <Form.Control className="form-control-start" type="text" placeholder="Enter Identifier" value={ identifier } onChange={(event) => setIdentifier(event.target.value)} disabled={sessionId} />
    <Button className="btn-start" onClick={onJoin}> Join </Button>
  </div>)
}

export const Start = (props) => <StartPage {...props} />;
