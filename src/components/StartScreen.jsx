import DirectionCard from './DirectionCard'

export default function StartScreen({ directions, onStart }) {
  return (
    <div>
      <section className="hero-block">
        <div className="hero-label">Профориентационное тестирование</div>
        <h1 className="hero-title">
          Определите направление обучения, которое подходит абитуриенту
        </h1>
        <p className="hero-text">
          Ответьте на вопросы теста, чтобы получить основную рекомендацию по
          специальности и увидеть дополнительные варианты, близкие по интересам
          и типу предпочтительной деятельности.
        </p>
        <div className="hero-actions">
          <button type="button" className="btn-primary" onClick={onStart}>
            Начать тестирование
          </button>
        </div>
      </section>

      <section className="section">
        <div className="content-grid">
          <div className="panel">
            <h2 className="panel-title">Как работает сервис</h2>
            <p className="panel-subtitle">
              Система сопоставляет ответы абитуриента с профилями специальностей
              колледжа и показывает наиболее подходящий вариант.
            </p>

            <div className="info-list">
              <div className="info-item">
                Тест состоит из 15 вопросов с понятными вариантами ответа.
              </div>
              <div className="info-item">
                Каждому ответу соответствуют баллы для одного или нескольких
                направлений.
              </div>
              <div className="info-item">
                После завершения выводится основная рекомендация и 2
                альтернативы.
              </div>
              <div className="info-item">
                Результаты не сохраняются и рассчитываются только в текущем
                сеансе.
              </div>
            </div>
          </div>

          <div className="panel">
            <h2 className="panel-title">Наши специальности</h2>
            <p className="panel-subtitle">
              Направления, участвующие в профориентационном тестировании.
            </p>

            <div className="direction-list">
              {directions.map((direction) => (
                <DirectionCard key={direction.key} direction={direction} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}