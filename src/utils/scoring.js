export function createInitialScores(directions) {
  return directions.reduce((acc, direction) => {
    acc[direction.key] = 0
    return acc
  }, {})
}

export function calculateScores(questions, answers, directions) {
  const result = createInitialScores(directions)

  questions.forEach((question) => {
    const selectedAnswerIndex = answers[question.id]

    if (selectedAnswerIndex === undefined) return

    const answer = question.answers[selectedAnswerIndex]

    Object.entries(answer.scores).forEach(([key, value]) => {
      result[key] += value
    })
  })

  return result
}

export function rankDirections(scores, directions) {
  return Object.entries(scores)
    .map(([key, score]) => ({
      direction: directions.find((item) => item.key === key),
      score,
    }))
    .sort((a, b) => b.score - a.score)
}