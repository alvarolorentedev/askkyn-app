const idGeneratorFunction = () => Math.random().toString(36).replace('0.', '').substr(1,5)
const currentTimestampGeneratorFunction = () => Date.now()

export const create = async (db, idGenerator=idGeneratorFunction, timestampGenerator=currentTimestampGeneratorFunction) => {
    const _id = idGenerator()
    var createdOn = timestampGenerator()
    try {
        const result = await db.put({_id, createdOn, players: [], questions: []})
        return({
            success: true,
            identifier: _id
        })
    } catch (error) {
        return({
            success: false
        })
    }
}