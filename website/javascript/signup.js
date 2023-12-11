function sendTwoSecScreen(screen){

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (!validate(username, password1, password2, email)) return;
    
    if (screen == 2){
        document.getElementById("screen1").style.display = "none";
        document.getElementById("screen2").style.display = "block";
        document.getElementById("screen3").style.display = "none";
    }
    if (screen == 3){
        document.getElementById("screen1").style.display = "none";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("screen3").style.display = "block";
    }
}

function validate(username, password1, password2, email) 
{
    if (username == ""){
        alert("Please enter a username");
        return;
    }
    if (email == ""){
        alert("Please enter an email");
        return;
    }
    if (password1 == ""){
        alert("Please enter a password");
        return;
    }
    if (password2 == ""){
        alert("Please confirm your password");
        return;
    }
    if (password1 != password2){
        alert("Passwords do not match");
        return;
    }
    if (password1.length < 8){
        alert("Password must be at least 8 characters long");
        return;
    }
    if (password1.length > 20){
        alert("Password must be less than 20 characters long");
        return;
    }
    if (username.length > 50){
        alert("Username must be less than 50 characters long");
        return;
    }
    if (username == email){
        alert("Username and email cannot be the same");
        return;
    }
    if (email.length > 50){
        alert("Email must be less than 50 characters long");
        return;
    }
    if (email.indexOf("@") == -1){
        alert("Email must contain an @");
        return;
    }
    if (email.indexOf(".") == -1){
        alert("Email must contain a .");
        return;
    }
    if (email.indexOf("@") == 0){
        alert("Email must contain a username");
        return;
    }
    if (email.indexOf(".") == 0){
        alert("Email must contain a domain");
        return;
    }
    if (email.indexOf("@") == email.length - 1){
        alert("Email must contain a domain");
        return;
    }
    if (email.indexOf(".") == email.length - 1){
        alert("Email must contain a domain");
        return;
    }
    if (email.indexOf("@") != email.lastIndexOf("@")){
        alert("Email must contain only one @");
        return;
    }
    if (email.indexOf(".") != email.lastIndexOf(".")){
        alert("Email must contain only one .");
        return;
    }
    return true;
}

function selectElsana(button, elsana) {
    // Remove 'selected' class from all buttons
    var buttons = document.querySelectorAll('.elsana-button');
    buttons.forEach(function (btn) {
      btn.classList.remove('elsana-button-selected');
    });

    // Add 'selected' class to the clicked button
    button.classList.add('elsana-button-selected');

    if (elsana == "2"){
        document.getElementById("taqasous-2").style.display = "flex";
        document.getElementById("taqasous-3").style.display = "none";
    } else if (elsana == "3"){
        document.getElementById("taqasous-2").style.display = "none";
        document.getElementById("taqasous-3").style.display = "flex";
    } else {
        document.getElementById("taqasous-2").style.display = "none";
        document.getElementById("taqasous-3").style.display = "none";
    }
}
function selectTaqasous(button, taqasous) {
    // Remove 'selected' class from all buttons
    var buttons = document.querySelectorAll('.taqasous-button');
    buttons.forEach(function (btn) {
      btn.classList.remove('taqasous-button-selected');
    });

    // Add 'selected' class to the clicked button
    button.classList.add('taqasous-button-selected');
}