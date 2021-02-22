import PouchDB from 'pouchdb'
import { create } from './questionnaire/create'
import { join } from './questionnaire/join'
import { submit } from './questionnaire/submit'
import { activate } from './questionnaire/activate'
import { answer } from './questionnaire/answer'
import { subscribe } from './questionnaire/subscribe'

const backendBaseUrl = process.env.NODE_ENV === 'production' ? "https://askkyn.herokuapp.com" : "http://localhost:8080"

export const db = new PouchDB(`${backendBaseUrl}/db/askkyn`)

export const createQuestionnaire = () => create(db)
export const joinQuestionnaire = (identifier, username) => join(db, identifier, username)
export const submitQuestionnaire = (identifier, questions) => submit(db, identifier, questions)
export const subscribeQuestionnaire = (identifier, onChange) => subscribe(db, identifier, onChange)

export const activateQuestion = (identifier, index) => activate(db, identifier, index)
export const answerQuestion = (identifier, username, indexQuestion, IndexAnswer) => answer(db, identifier, username, indexQuestion, IndexAnswer)