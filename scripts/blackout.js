const userBox = document.getElementById("username"); 
const passBox = document.getElementById("password"); 
const errorMessage = document.getElementById("error");

function checkValues() {
    username = userBox.value;
    password = passBox.value; 
    errorMessage.classList.remove("shown");
    errorMessage.classList.add("hidden");
    if (username == "bl4ck0ut" && password == "3nt3rs1t3") {
        window.location.href = "/system/blackout/desktop.html";
    }
    else {
        errorMessage.classList.add("shown");
        errorMessage.classList.remove("hidden");
    }
}