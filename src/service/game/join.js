export const join = async (db, identifier, username) => {
    try {
        const result = await db.get(identifier)
        return({
            success: true,
            result: result
        })
    } catch (error) {
        return({
            success: false
        })
    }
}