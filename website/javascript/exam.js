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

// function checkAllAnswers() {
//     let allAnswered = true;
//     for (let i = 1; i <= questionsNumber; i++) {
//         const question = document.getElementById(`q${i}`);
//         const answers = question.getElementsByClassName('answer');
//         let answered = false;
//         for (let j = 0; j < answers.length; j++) {
//             if (answers[j].checked) {
//                 answered = true;
//                 break;
//             }
//         }
//         if (!answered) {
//             allAnswered = false;
//             break;
//         }
//     }
//     console.log(allAnswered);
//     return allAnswered;
// }



function checkAllAnswers() {
    let allAnswered = true;

    for (let i = 1; i <= questionsNumber; i++) {
        const question = document.getElementById(`q${i}`);
        const answers = question.querySelectorAll('.answer input[name="answer' + i + '"]');
        const selectedAnswer = [...answers].find(answer => answer.checked);

        if (!selectedAnswer) {
            // console.log(`Question ${i} is not answered.`);
            allAnswered = false;
        } else {
            // console.log(`Question ${i}: Selected answer - ${selectedAnswer.value}`);
        }
    }

    if (allAnswered) {
        // console.log('All questions answered.');
    }
    
    return allAnswered;
}
