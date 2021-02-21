export const get = async (db, identifier) => {
    try {
        return({
            success: true,
            result: await db.get(identifier)
        })
    } catch (error) {
        return({
            success: false
        })
    }
}