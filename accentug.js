const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer')

//local variables .
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which country was famous designer valentino clemente born?',
    answers: [
      { text: 'Italy', correct: true },
      { text: 'southafrica', correct: false },
      { text: 'Germany', correct: false },
      { text: 'Mexico', correct: false }
    ]
  },
  {
    question: 'Who is the best denim manufacturer in the world?',
    answers: [
      { text: 'prada', correct: false },
      { text: 'Tommy Hilfiger', correct: true },
      { text: 'Gucci', correct: false },
      { text: 'Balenciaga', correct: false }
    ]
  },
  {
    question: 'which of the kardashians has the newest fashion empire?',
    answers: [
      { text: 'Kylie', correct: false },
      { text: 'kim', correct: true },
      { text: 'khloe', correct: false },
      { text: 'khourtney', correct: false }
    ]
  },
  {
    question: 'Alexander macqueen was a chief designer at?',
    answers: [
      { text: 'Yeezy', correct: false },
      { text: 'Givenchy', correct: true },
      { text: 'Loui vitton', correct: false },
      { text: 'Nike', correct: false }
    ]
  },
  {
    question: 'What is christian louiboutin known for?',
    answers: [
      { text: 'high end stilleto footwear', correct: true },
      { text: 'Denim', correct: false },
      { text: 'Bags', correct: false },
      { text: 'shoes', correct: false }
    ]
  },
  {
    question: 'Which is the most expensive lipstick in the world?',
    answers: [
      { text: 'mac', correct: false },
      { text: 'H.couture beauty diamond ', correct: true },
      { text: 'maybelline', correct: false },
      { text: 'Revlon', correct: false }
    ]
  },
  {
    question: 'what is the most expensive nike shoe?',
    answers: [
      { text: 'Nike Airmax 95', correct: false },
      { text: 'Nike Air Jordan', correct: true },
      { text: 'Nike Airmax 97', correct: false },
      { text: 'kyrie 7', correct: false }
    ]
  },
  {
    question: 'What is the most expensive dress in the world?',
    answers: [
      { text: 'William Travelli Subway dress', correct: false },
      { text: 'Nightingale of Kuala lumpur', correct: true },
      { text: 'Imperial pearl', correct: false },
      { text: 'chartreuse christian dior gown', correct: false }
    ]
  }

]