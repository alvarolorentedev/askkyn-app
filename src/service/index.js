import PouchDB from 'pouchdb'
import { create } from './game/create'
import { join } from './game/join'

export const db = new PouchDB('http://localhost:8080/db/askkyn');
export const createGame = () => create(db)
export const joinGame = (identifier, username) => join(db, identifier, username)
