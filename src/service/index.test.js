import { db, joinGame, createGame } from './index'
describe('index', () => {
    it('should export db', async () => {
        expect(db).toBeTruthy()
    })

    it('should export joinGame', async () => {
        expect(joinGame).toBeTruthy()
    })
    it('should export createGame', async () => {
        expect(createGame).toBeTruthy()
    })
})