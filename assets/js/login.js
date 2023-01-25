const form = document.getElementById("form");
const username = document.getElementById("username");
const errorText = document.getElementById("error-text")



form.addEventListener("submit", function (event) {
    event.preventDefault("")
    let loop = true;
    while (loop) {
        if (username.value.trim() == "") {
            errorText.innerText = "username shouldn't be empty!"
            break;
        } else if (username.value.length <= 2) {
            errorText.innerText = "please provide a username longer than 2 characters!!"
            break;
        } else if (username.value.length > 2) {
            errorText.innerText = ""
            username.value = ""
            localStorage.setItem("username", username.value);
            window.location = "/index.html"
            // loop = false;
            break;
        }
    }
})