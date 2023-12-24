var buttons = document.querySelectorAll('.q-a-item');

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var answerDiv = button.querySelector('.a');
        answerDiv.style.display = (answerDiv.style.display === 'none' || answerDiv.style.display === '') ? 'block' : 'none';
    });
});