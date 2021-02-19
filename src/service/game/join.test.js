import { join } from './join'
import * as faker from 'faker'

describe('join', () => {
    it('should return id of generated record if success', async () => {
        const expectedResult = {
            some: faker.random.uuid()
        }
        const db = {
            get: jest.fn().mockResolvedValue(expectedResult)
        }
        
        const result = await join(db)

        expect(db.get).toHaveBeenCalled()

        expect(result.success).toBe(true)
        expect(result.result).toBe(expectedResult)
    })
    it('should return empty id of generated record if failure', async () => {
        const db = {
            get: jest.fn().mockRejectedValue(new Error('kaboom'))
        }
        
        const result = await join(db)
        
        expect(db.get).toHaveBeenCalled()

        expect(result.success).toBe(false)
    })
})
