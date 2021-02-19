import { create } from './create'
import * as faker from 'faker'

describe('create', () => {
    it('should return id of generated record if success', async () => {
        const db = {
            put: jest.fn()
        }
        const expectedId = faker.random.uuid()
        const expectedTimestamp = faker.random.number()
        
        const result = await create(db, () => expectedId, () => expectedTimestamp)

        expect(db.put).toHaveBeenCalledWith({
            _id: expectedId,
            createdOn: expectedTimestamp,
            players: [],
            questions: []
        })

        expect(result.success).toBe(true)
        expect(result.identifier).toBe(expectedId)
    })
    it('should return empty id of generated record if failure', async () => {
        const db = {
            put: jest.fn().mockRejectedValue(new Error('kaboom'))
        }
        
        const result = await create(db)
        
        expect(db.put).toHaveBeenCalled()

        expect(result.success).toBe(false)
        expect(result.identifier).toBeFalsy()
    })
})
