function Tag({ children }) {
  return <span className="tag">{children}</span>
}

function AlternativeCard({ item, index }) {
  return (
    <div className="alt-card">
      <div className="alt-label">Альтернатива {index + 1}</div>
      <div className="alt-title">{item.direction.title}</div>
      <div className="alt-meta">
        {item.direction.code} · {item.direction.qualification}
      </div>
      <div className="alt-text">{item.direction.short}</div>
      <div className="alt-score">Баллы: {item.score}</div>
    </div>
  )
}

export default function ResultCard({ ranking, onRestart }) {
  const top = ranking[0]
  const second = ranking[1]
  const third = ranking[2]

  return (
    <div>
      <section className="result-hero">
        <div className="result-hero-top">
          <div className="result-kicker">Результат тестирования</div>
          <h1 className="result-title">{top.direction.title}</h1>
          <div className="result-meta">
            {top.direction.code} · {top.direction.qualification}
          </div>

          <div className="result-score">
            <div className="result-score-value">{top.score}</div>
            <div className="result-score-text">баллов совпадения</div>
          </div>
        </div>

        <div className="result-body">
          <div>
            <div className="result-section-title">
              Почему это направление подходит
            </div>
            <div className="result-text">{top.direction.description}</div>

            <div className="result-subgrid">
              <div className="result-box">
                <div className="result-box-title">Ключевые дисциплины</div>
                <div className="tag-list">
                  {top.direction.subjects.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>

              <div className="result-box">
                <div className="result-box-title">Подходящие качества</div>
                <div className="tag-list">
                  {top.direction.traits.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="result-section-title">Практика и карьера</div>
            <div className="employer-list">
              {top.direction.employers.map((item) => (
                <div key={item} className="employer-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="alt-grid">
        {second && <AlternativeCard item={second} index={0} />}
        {third && <AlternativeCard item={third} index={1} />}

        <div className="alt-card">
          <div className="alt-label">Особенности сервиса</div>
          <div className="alt-title">Локальный расчёт результата</div>
          <div className="alt-text">
            Профориентационный тест работает без хранения результатов и без
            отправки ответов в базу данных.
          </div>
          <div className="alt-score">Формат: только текущий сеанс</div>
        </div>
      </section>

      <div className="footer-action">
        <button type="button" className="btn-primary" onClick={onRestart}>
          Пройти тест заново
        </button>
      </div>
    </div>
  )
}