import { create } from './create'

describe('create', () => {
    it('should return id of generated record if success', async () => {
        const db = {
            put: jest.fn()
        }
        
        const result = await create(db)

        expect(db.put).toHaveBeenCalled()

        expect(result.success).toBe(true)
        expect(result.identifier).toBeTruthy()
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
