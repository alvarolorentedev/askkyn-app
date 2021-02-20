import { db, joinQuestionnaire, createQuestionnaire } from './index'
describe('index', () => {
    it('should export db', async () => {
        expect(db).toBeTruthy()
    })

    it('should export joinQuestionnaire', async () => {
        expect(joinQuestionnaire).toBeTruthy()
    })
    it('should export createQuestionnaire', async () => {
        expect(createQuestionnaire).toBeTruthy()
    })
})