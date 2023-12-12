function showWallet() {

    let walletInfo = document.getElementById("wallet-info-id");
    if (walletInfo.style.display == "none" || walletInfo.style.display === "") {
        walletInfo.style.display = "flex";
    } else {
        walletInfo.style.display = "none";
    }
}