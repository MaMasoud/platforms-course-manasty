function selectCategory(button, elsana) {
    // Remove 'selected' class from all buttons
    var buttons = document.querySelectorAll('button.category');
    buttons.forEach(function (btn) {
      btn.classList.remove('selected');
    });
    // Add 'selected' class to the clicked button
    button.classList.add('selected');
}