import { get } from './get'
import * as faker from 'faker'

describe('get', () => {

    const id = faker.random.uuid()

    it('should return id of generated record if success', async () => {
        const expectedResult = {
            some: faker.random.uuid(),
            players: []
        }
        const db = {
            get: jest.fn().mockResolvedValue(expectedResult),
        }
        
        const result = await get(db, id)

        expect(db.get).toHaveBeenCalledWith(id)

        expect(result.success).toBe(true)
        expect(result.result).toBe(expectedResult)
    })
    it('should return empty id of generated record if failure', async () => {
        const db = {
            get: jest.fn().mockRejectedValue(new Error('kaboom'))
        }
        
        const result = await get(db, id)
        
        expect(db.get).toHaveBeenCalled()

        expect(result.success).toBe(false)
        expect(result.result).toBeFalsy()
    })
})