export const create = async (db) => {
    const _id = Math.random().toString(36).replace('0.', '').substr(1,5)
    try {
        await db.put({_id})
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