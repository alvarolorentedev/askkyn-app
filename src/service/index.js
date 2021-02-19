import PouchDB from 'pouchdb'
import { create } from './game/create'
import { join } from './game/join'

const backendBaseUrl = process.env.NODE_ENV === 'production' ? "https://askkyn.herokuapp.com" : "http://localhost:8080"

export const db = new PouchDB(`${backendBaseUrl}/db/askkyn`);
export const createGame = () => create(db)
export const joinGame = (identifier, username) => join(db, identifier, username)
