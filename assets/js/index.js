// this code is not used in on the main index page , but where Ive stored all the js i used for the other pages , just in case 


// I will leave this empty for now"


// SAME JS FOR RULES HTML 
let storageUsername = localStorage.getItem("username") || "";
let usernameText = document.getElementById("storage-username");

usernameText.innerText = `Welcome ${storageUsername}`