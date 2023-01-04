const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById
('question');



const buttons = document.getElementById('anwser-buttons')

let shuffledQuestions, currentQuestionsIndex;

startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionsIndex = 0
questionElement.classList.remove('hide')
buttons.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
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
        buttons.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (buttons.firstChild) {
        buttons.removeChild
        (buttons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(buttons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
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

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'who designed this website',
        answers: [
            {text: 'boy spyce', correct: false},
            {text: 'charles emmanuel', correct: true},
            {text: 'your father', correct: false},
            {text: 'CUG', correct: false},

        ]
    },
    {
        question: 'what is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '16', correct: false},
            {text: '3', correct: false},

        ]
    },
    {
        question: 'whats the fomular for impulse',
        answers: [
            {text: 'm = tf', correct: false},
            {text: 'i =fm', correct: false},
            {text: 'i = ft', correct: true},
            {text: 'a = mv', correct: false},

        ]
    },
    {
        question: 'who is the fastest man alive',
        answers: [
            {text: 'elon musk', correct: false},
            {text: 'berry allen', correct: true},
            {text: 'clark kent', correct: false},
            {text: 'harsion bolt', correct: false},

        ]
    },
]