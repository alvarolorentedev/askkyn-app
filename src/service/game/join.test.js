import { join } from './join'
import * as faker from 'faker'

describe('join', () => {

    const id = faker.random.uuid()
    const username = faker.random.uuid()

    it('should return id of generated record if success', async () => {
        const expectedResult = {
            some: faker.random.uuid(),
            players: []
        }
        const db = {
            get: jest.fn().mockResolvedValue(expectedResult),
            put: jest.fn().mockResolvedValue(expectedResult),
        }
        
        const result = await join(db, id, username)

        expect(db.get).toHaveBeenCalledWith(id)
        expect(db.put).toHaveBeenCalledWith({
            ...expectedResult, players: [...expectedResult.players, username]
        })

        expect(result.success).toBe(true)
    })
    it('should return empty id of generated record if failure', async () => {
        const db = {
            get: jest.fn().mockRejectedValue(new Error('kaboom'))
        }
        
        const result = await join(db, id, username)
        
        expect(db.get).toHaveBeenCalled()

        expect(result.success).toBe(false)
    })
})
