export const submit = async (db, identifier, questions) => {
    try {
        const currentRecord = await db.get(identifier)
        await db.put({ ...currentRecord, questions })
        return({
            success: true
        })
    } catch (error) {
        return({
            success: false
        })
    }
}