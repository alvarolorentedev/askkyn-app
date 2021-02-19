export const join = async (db, identifier, username) => {
    try {
        const currentRecord = await db.get(identifier)
        await db.put({...currentRecord, players: [...currentRecord.players, username]})
        return({
            success: true
        })
    } catch (error) {
        return({
            success: false
        })
    }
}