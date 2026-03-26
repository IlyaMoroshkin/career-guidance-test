import { useMemo, useState } from 'react'
import { directions } from './data/directions'
import { questions } from './data/questions'
import { calculateScores, rankDirections } from './utils/scoring'
import StartScreen from './components/StartScreen'
import QuestionCard from './components/QuestionCard'
import ResultCard from './components/ResultCard'
import Footer from './components/Footer'
import logo from './assets/logo.svg'

export default function App() {
  const [started, setStarted] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const totalQuestions = questions.length
  const currentQuestion = questions[step]
  const isCompleted = Object.keys(answers).length === totalQuestions

  const scores = useMemo(() => {
    return calculateScores(questions, answers, directions)
  }, [answers])

  const ranking = useMemo(() => {
    return rankDirections(scores, directions)
  }, [scores])

  function handleStart() {
    setStarted(true)
  }

  function handleSelectAnswer(answerIndex) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerIndex,
    }))
  }

  function handleNext() {
    if (step < totalQuestions - 1) {
      setStep((prev) => prev + 1)
    }
  }

  function handlePrev() {
    if (step > 0) {
      setStep((prev) => prev - 1)
    }
  }

  function handleRestart() {
    setStarted(false)
    setStep(0)
    setAnswers({})
  }

  return (
    <div className="site-shell">

      {/* ШАПКА */}
      <div className="brandline">
        <div className="page-wrap brandline-inner">

          <div className="brand-left">
            <img src={logo} alt="Логотип" className="brand-logo" />

            <div className="brand-copy">
              <div className="brand-toptext">
                ФГБОУ ВО «РГАТУ им. П.А. Соловьева»
              </div>

              <div className="brand-title">
                Авиационный колледж
              </div>

              <div className="brand-subtitle">
                Сервис подбора направления обучения по интересам и склонностям
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* КОНТЕНТ (СМЕЩЁН ПОД ЛОГОТИП) */}
      <main className="section">
        <div className="page-wrap content-offset">

          {!started ? (
            <StartScreen directions={directions} onStart={handleStart} />
          ) : !isCompleted ? (
            <QuestionCard
              question={currentQuestion}
              questionIndex={step}
              totalQuestions={totalQuestions}
              selectedAnswer={answers[currentQuestion.id]}
              onSelectAnswer={handleSelectAnswer}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          ) : (
            <ResultCard ranking={ranking} onRestart={handleRestart} />
          )}

        </div>
      </main>

      <Footer />
    </div>
  )
}