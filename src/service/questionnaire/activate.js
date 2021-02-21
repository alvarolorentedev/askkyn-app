export const activate = async (db, identifier, index) => {
    try {
        const currentRecord = await db.get(identifier)
        await db.put({...currentRecord, active: index})
        return({
            success: true
        })
    } catch (error) {
        return({
            success: false
        })
    }
}