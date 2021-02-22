export const answer = async (db, identifier, username, indexQuestion, IndexAnswer) => {
    try {
        const currentRecord = await db.get(identifier)
        await db.put(
            {...currentRecord, 
                questions: currentRecord.questions.map((question, index) => index === indexQuestion
                    ? {...question, 
                        answers: question.answers.map((answer, index) => index === IndexAnswer
                            ? {...answer, votes: [...new Set([...answer.votes, username])]} 
                            : {...answer, votes: answer.votes.filter(value => value !== username)} ) }
                    : question)
            })
        return({
            success: true
        })
    } catch (error) {
        return({
            success: false
        })
    }
}