function showNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "block";
    setTimeout(function () {
        notification.style.display = "none";
    }, 3000);
}

function hideNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}