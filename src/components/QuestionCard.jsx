export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onPrev,
  onNext,
}) {
  const progress = ((questionIndex + 1) / totalQuestions) * 100

  return (
    <div className="test-layout">
      <section className="question-box">
        <div className="question-top">
          <div>
            <div className="question-label">
              Вопрос {questionIndex + 1} из {totalQuestions}
            </div>
            <h2 className="question-title">{question.title}</h2>
            <div className="question-help">
              Выберите один вариант, который лучше всего подходит.
            </div>
          </div>

          <div className="progress-wrap">
            <div className="progress-text">{Math.round(progress)}%</div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="answers-list">
          {question.answers.map((answer, index) => {
            const isSelected = selectedAnswer === index

            return (
              <button
                key={index}
                type="button"
                onClick={() => onSelectAnswer(index)}
                className={`answer-btn ${isSelected ? 'selected' : ''}`}
              >
                <div className="answer-inner">
                  <div className="answer-text">{answer.text}</div>
                  <div className="answer-mark" />
                </div>
              </button>
            )
          })}
        </div>

        <div className="question-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onPrev}
            disabled={questionIndex === 0}
          >
            Назад
          </button>

          <button
            type="button"
            className="btn-primary"
            onClick={onNext}
            disabled={selectedAnswer === undefined}
          >
            {questionIndex === totalQuestions - 1
              ? 'Показать результат'
              : 'Следующий вопрос'}
          </button>
        </div>
      </section>

      <aside className="side-panel">
        <div className="side-panel-title">Информация</div>
        <div className="side-panel-subtitle">
          Результат рассчитывается по ответам текущего сеанса.
        </div>

        <div className="side-ranking">
          <div className="side-ranking-item">
            <div className="side-ranking-top">
              <div className="side-ranking-title">Формат тестирования</div>
            </div>
            <div className="side-ranking-text">
              Один вопрос — один выбранный ответ.
            </div>
          </div>

          <div className="side-ranking-item">
            <div className="side-ranking-top">
              <div className="side-ranking-title">Результат</div>
            </div>
            <div className="side-ranking-text">
              После завершения будут показаны основное направление и два
              дополнительных варианта.
            </div>
          </div>

          <div className="side-ranking-item">
            <div className="side-ranking-top">
              <div className="side-ranking-title">Хранение данных</div>
            </div>
            <div className="side-ranking-text">
              Ответы не сохраняются и не отправляются в базу данных.
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}