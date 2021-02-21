import { activate } from './activate'
import * as faker from 'faker'

describe('activate', () => {

    const id = faker.random.uuid()
    const index = faker.random.number()

    it('should return true if success', async () => {
        const expectedResult = {
            some: faker.random.uuid()
        }
        const db = {
            get: jest.fn().mockResolvedValue(expectedResult),
            put: jest.fn().mockResolvedValue(expectedResult),
        }
        
        const result = await activate(db, id, index)

        expect(db.get).toHaveBeenCalledWith(id)
        expect(db.put).toHaveBeenCalledWith({
            ...expectedResult, active: index
        })

        expect(result.success).toBe(true)
    })
    it('should return false if failure', async () => {
        const db = {
            get: jest.fn().mockRejectedValue(new Error('kaboom'))
        }
        
        const result = await activate(db, id, index)
        
        expect(db.get).toHaveBeenCalled()

        expect(result.success).toBe(false)
    })
})
