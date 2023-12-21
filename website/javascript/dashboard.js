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