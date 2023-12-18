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

function erorrScreen(id) {
    document.getElementById(id).focus();
        document.getElementById(id).style.border = "2px solid #E62836";
}

function validate(username, password1, password2, email) 
{
    if (username == ""){
        message("Please enter a username");
        erorrScreen("username");
        return;
    }
    if (email == ""){
        message("Please enter an email");
        erorrScreen("email");
        return;
    }
    if (password1 == ""){
        message("Please enter a password");
        erorrScreen("password1");
        return;
    }
    if (password2 == ""){
        message("Please confirm your password");
        erorrScreen("password2");
        return;
    }
    if (password1 != password2){
        message("Passwords do not match");
        erorrScreen("password1");
        return;
    }
    if (password1.length < 8){
        message("Password must be at least 8 characters long");
        erorrScreen("password1");
        return;
    }
    if (password1.length > 20){
        message("Password must be less than 20 characters long");
        erorrScreen("password1");
        return;
    }
    if (username.length > 50){
        message("Username must be less than 50 characters long");
        erorrScreen("username");
        return;
    }
    if (username == email){
        message("Username and email cannot be the same");
        erorrScreen("email");
        return;
    }
    if (email.length > 50){
        message("Email must be less than 50 characters long");
        erorrScreen("email");
        return;
    }
    if (email.indexOf("@") == -1){
        message("Email must contain an @");
        erorrScreen("email");
        return;
    }
    if (email.indexOf(".") == -1){
        message("Email must contain a .");
        erorrScreen("email");
        return;
    }
    if (email.indexOf("@") == 0){
        message("Email must contain a username");
        erorrScreen("email");
        return;
    }
    if (email.indexOf(".") == 0){
        message("Email must contain a domain");
        erorrScreen("email");
        return;
    }
    if (email.indexOf("@") == email.length - 1){
        message("Email must contain a domain");
        erorrScreen("email");
        return;
    }
    if (email.indexOf(".") == email.length - 1){
        message("Email must contain a domain");
        erorrScreen("email");
        return;
    }
    if (email.indexOf("@") != email.lastIndexOf("@")){
        message("Email must contain only one @");
        erorrScreen("email");
        return;
    }
    if (email.indexOf(".") != email.lastIndexOf(".")){
        message("Email must contain only one .");
        erorrScreen("email");
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

function message(message){
    document.getElementById("message").innerHTML = message;
    document.getElementById("message").style.display = "block";
    setTimeout(function(){ document.getElementById("message").style.display = "none"; }, 5000);
}