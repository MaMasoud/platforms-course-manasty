function showWallet() {

    let walletInfo = document.getElementById("wallet-info-id");
    if (walletInfo.style.display == "none" || walletInfo.style.display === "") {
        walletInfo.style.display = "flex";
    } else {
        walletInfo.style.display = "none";
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
