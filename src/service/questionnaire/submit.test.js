import { submit } from './submit'
import * as faker from 'faker'

describe('submit', () => {

    const id = faker.random.uuid()
    const questions = [{
            question: faker.random.uuid(),
            answers: [
                {
                    value:faker.random.uuid(),
                },
                {
                    value:faker.random.uuid(),
                },
            ]
        }
    ]

    it('should return id of generated record if success', async () => {
        const expectedResult = {
            some: faker.random.uuid(),
            players: []
        }
        const db = {
            get: jest.fn().mockResolvedValue(expectedResult),
            put: jest.fn().mockResolvedValue(expectedResult),
        }
        
        const result = await submit(db, id, questions)

        expect(db.get).toHaveBeenCalledWith(id)
        expect(db.put).toHaveBeenCalledWith({
            ...expectedResult, questions
        })

        expect(result.success).toBe(true)
    })
    it('should return empty id of generated record if failure', async () => {
        const db = {
            get: jest.fn().mockRejectedValue(new Error('kaboom'))
        }
        
        const result = await submit(db, id, questions)
        
        expect(db.get).toHaveBeenCalled()

        expect(result.success).toBe(false)
    })
})
