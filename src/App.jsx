import React from "react"
import { Router, navigate } from "@reach/router"
import {Navbar, Modal} from "react-bootstrap"
import { Start } from "./components/start/index.jsx"
import { Questionnaire } from "./components/questionnaire/index.jsx"
import { Summary } from "./components/summary/index.jsx"
import { Answers } from "./components/answers/index.jsx"
import { useState } from 'react'
import { Grid } from 'svg-loaders-react'
import './App.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { createQuestionnaire, joinQuestionnaire, submitQuestionnaire, activateQuestion, answerQuestion, subscribeQuestionnaire, db } from './service'
import logo from './logo.webp'

library.add(fab, far, fas)


const Loading = ({ Component, ...rest }) =>{
  const [isLoading,setIsLoading] = useState(true);
  return (<>
    <Component {...rest} finishedLoading={(err) => {
      setIsLoading(false)
      if(err)
        navigate(`/error/${err}`)
    }} />
    <Modal
        show={isLoading}
        keyboard={false}
        backdrop="static"
        size="sm"
        centered
      >
        <Modal.Body>
          <Grid />
        </Modal.Body>
      </Modal>
    </>)
}

const PublicRoute = ({ ...rest }) => (
  <Loading {...rest} />
);

const App = () => {
  return (<div id="main">
    <Navbar>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="42"
          height="42"
          className="d-inline-block align-top"
        /> Askkyn
      </Navbar.Brand>
    </Navbar>
   <Router>
     <PublicRoute default path="default" Component={Start} create={createQuestionnaire} join={joinQuestionnaire} />
     <PublicRoute path="session/:sessionId" Component={Start} join={joinQuestionnaire} create={createQuestionnaire} />
     <PublicRoute path="session/:sessionId/questionnaire" Component={Questionnaire} db={db} submit={submitQuestionnaire} />
     <PublicRoute path="session/:sessionId/summary" Component={Summary} db={db} activateQuestion={activateQuestion} subscribeChanges={subscribeQuestionnaire} />
     <PublicRoute path="session/:sessionId/answers/:username" Component={Answers} db={db} answerQuestion={answerQuestion} subscribeChanges={subscribeQuestionnaire} />
   </Router>
 </div>)
 };

export default App;
