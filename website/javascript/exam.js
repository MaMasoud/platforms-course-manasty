let currentQuestionIndex = 1; // Initialize with the index of the first question
let questionsNumber = document.getElementsByClassName('question-exam').length;
let currentQuestionSpan = document.getElementById('q-num');
let submetShow = false;

document.getElementById('num-all-question').innerHTML = questionsNumber;

function nextQuestion() {
    const currentQuestion = document.getElementById(`q${currentQuestionIndex}`);
    const nextQuestion = document.getElementById(`q${currentQuestionIndex + 1}`);

    if (nextQuestion) {
        currentQuestion.style.display = 'none';
        nextQuestion.style.display = 'block';
        currentQuestionIndex++;
        currentQuestionSpan.innerHTML = currentQuestionIndex;
    }
    if (currentQuestionIndex === questionsNumber) {
        document.getElementById('btn-next').style.display = 'none';
        document.getElementById('btn-submit').style.display = 'flex';
        submetShow = true;
    }
}

function backQuestion() {
    if (submetShow) {
        document.getElementById('btn-next').style.display = 'flex';
        document.getElementById('btn-submit').style.display = 'none';
        submetShow = false;
    }
    if (currentQuestionIndex > 1) {
        const currentQuestion = document.getElementById(`q${currentQuestionIndex}`);
        const previousQuestion = document.getElementById(`q${currentQuestionIndex - 1}`);
        
        currentQuestion.style.display = 'none';
        previousQuestion.style.display = 'block';
        currentQuestionIndex--;
        currentQuestionSpan.innerHTML = currentQuestionIndex;
    }
}