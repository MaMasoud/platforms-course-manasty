// function showWallet() {

//     let walletInfo = document.getElementById("wallet-info-id");
//     if (walletInfo.style.display == "none" || walletInfo.style.display === "") {
//         walletInfo.style.display = "flex";
//     } else {
//         walletInfo.style.display = "none";
//     }
// }
function showWallet() {
    let walletInfo = document.getElementById("wallet-info-id");
    if (walletInfo.style.display == "none" || walletInfo.style.display === "") {
        walletInfo.style.display = "flex";
        // Add event listener to handle clicks outside of the wallet
        document.addEventListener('click', handleOutsideClick);
    } else {
        walletInfo.style.display = "none";
    }
}

function handleOutsideClick(event) {
    let walletInfo = document.getElementById("wallet-info-id");
    let walletButton = document.querySelector('.wallet');
    if (!walletInfo.contains(event.target) && event.target !== walletButton) {
        walletInfo.style.display = "none";
        document.removeEventListener('click', handleOutsideClick);
    }
}


function showNotification() {
    let notification = document.getElementById("notification-card-show");
    let audio = document.getElementById('notificationSound');
    audio.play();
    notification.style.left = "20px";
    setTimeout(function () {
        notification.style.left = "-300px";
    }, 3000);
}
setTimeout(showNotification, 1000);


function handleInput(index, event) {
    // Ensure the input value is numeric
    event.target.value = event.target.value.replace(/\D/g, '');

    // Move to the next input field if available
    if (event.target.value !== '' && index < 12) {
        document.querySelector(`.otp-input:nth-child(${index + 1})`).focus();
    }

    // Move to the previous input field on backspace
    if (event.inputType === 'deleteContentBackward') {
        if (index > 1 && event.target.value === '') {
            document.querySelector(`.otp-input:nth-child(${index - 1})`).focus();
        } else if (index === 1 && event.target.value === '') {
            document.querySelector(`.otp-input:nth-child(${index})`).focus();
        }
    }
}

function handlePaste(index, event) {
    // Get the pasted text
    const pastedText = (event.clipboardData || window.clipboardData).getData('text');

    // Distribute pasted text among input fields
    for (let i = 0; i < pastedText.length && (index + i) <= 12; i++) {
        const inputField = document.querySelector(`.otp-input:nth-child(${index + i})`);
        if (inputField) {
            inputField.value = pastedText[i].replace(/\D/g, '');
        }
    }

}


async function pasteText() {
    try {
        const pastedText = await navigator.clipboard.readText();
        
        // Distribute pasted text among input fields
        for (let i = 0; i < pastedText.length && i < 12; i++) {
            const inputField = document.querySelector(`.otp-input:nth-child(${i + 1})`);
            if (inputField) {
                inputField.value = pastedText[i].replace(/\D/g, '');
            }
        }
    } catch (err) {
        console.error('Unable to read clipboard text:', err);
    }
}








let listElements = document.querySelectorAll('.link');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        if (listElement.classList.contains('active')) {
            listElement.classList.remove('active');
        } else {
            listElements.forEach(listE => {
                listE.classList.remove('active');
            })
            listElement.classList.toggle('active');
        }
    })
});

//block right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});






// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var openModalBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];
var closeBtn2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}
closeBtn2.onclick = function() {
    modal.style.display = "none";
    }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
