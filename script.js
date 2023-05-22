const quizData = [
    {
        question: 'How old is Kayla?',
        a: '12',
        b: '20',
        c: '27',
        d: '31',
        e: 'forever young',
        correct: 'e'
    }, {
        question: "What is Kayla's first programming language learned?",
        a: 'Java',
        b: 'JavaScript',
        c: 'HTML',
        d: 'CSS',
        e: 'Python',
        correct: 'b'
    }, {
        question: 'What state does Kayla currently reside in?',
        a: 'Florida',
        b: 'Georgia',
        c: 'Miami',
        d: 'California',
        e: 'Wherever the wind takes her',
        correct: 'a'
    }, {
        question: 'What did Kayla go to school for?',
        a: 'Marketing',
        b: 'Architecture',
        c: 'Computer Science',
        d: 'Graphic Design',
        e: 'Art',
        correct: 'b'
    }, {
        question: 'Why did Kayla decide to switch careers?',
        a: 'the money',
        b: 'gained many different interests in school',
        c: 'wanted a switch in pace',
        d: 'better overall work/life balance and skills',
        e: 'all of the above',
        correct: 'e'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

let currentQuiz= 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;

    if (e_text) {
        e_text.innerText = currentQuizData.e;
    }
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = 
                `<h2>You answered ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>`;
        }
    }
});
